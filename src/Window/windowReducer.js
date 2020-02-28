export const defaultState = {
  open: false,
  position: { left: 50, top: 50, width: 300, height: 300 },
  prevPosition: { left: 50, top: 50, width: 300, height: 300 },
  boundsOffset: { x: 0, y: 0 },
  maximized: false,
  transparent: false
};

export const actionTypes = {
  SET_POSITION: "SET_POSITION",
  SET_MAXIMIZED: "SET_MAXIMIZED",
  TOGGLE_MAXIMIZED: "TOGGLE_MAXIMIZED",
  SET_TRANSPARENT: "SET_TRANSPARENT",
  SET_OPEN: "SET_OPEN",
  OPEN: "OPEN",
  CLOSE: "CLOSE",
  RESIZE: "RESIZE"
};

function windowReducer(state = defaultState, action) {
  switch (action.type) {
    case actionTypes.SET_POSITION:
      return setPosition(state, action.payload);
    case actionTypes.SET_MAXIMIZED:
      return {
        ...state,
        maximized: action.payload
      };
    case actionTypes.SET_TRANSPARENT:
      return {
        ...state,
        transparent: action.payload
      };
    case actionTypes.TOGGLE_MAXIMIZED:
      if (state.maximized) {
        return {
          ...state,
          position: { ...state.prevPosition },
          maximized: false
        };
      }

      return {
        ...state,
        prevPosition: { ...state.position },
        position: {
          top: 0,
          left: 0,
          width: action.payload.width,
          height: action.payload.height
        },
        maximized: true
      };
    case actionTypes.SET_OPEN:
      return {
        ...state,
        open: action.payload
      };
    case actionTypes.OPEN:
      if (state.open) {
        return state;
      }

      const { containerSize, x, y } = action.payload;

      const width = Math.min(containerSize.width * 0.75, 600);
      const height = containerSize.height * 0.75;

      const newPosition = {
        ...state.position,
        left: x,
        top: y,
        width: width,
        height: height
      };

      return {
        ...state,
        position: newPosition,
        prevPosition: newPosition,
        open: true
      };
    case actionTypes.CLOSE:
      return {
        ...state,
        position: defaultState.position,
        prevPosition: defaultState.prevPosition,
        open: false
      };
    case actionTypes.RESIZE:
      return resize(state, action.payload);
    default:
      return state;
  }
}

function setPosition(state, payload) {
  const { prevPosition, maximized, position, boundsOffset } = state;
  const {
    mousePosition,
    mouseOffset,
    resizeMode,
    containerSize,
    minHeight,
    minWidth
  } = payload;

  if (maximized) {
    let newLeft = mousePosition.x - prevPosition.width / 2;
    newLeft = Math.max(0, newLeft);
    newLeft = Math.min(newLeft, containerSize.width - prevPosition.width);

    mouseOffset.x = mousePosition.x - newLeft;
    mouseOffset.y = mousePosition.y;

    return {
      ...state,
      position: {
        left: newLeft,
        top: 0,
        width: prevPosition.width,
        height: prevPosition.height
      },
      maximized: false
    };
  }

  let newPosition = { ...position };
  let newTransparent = false;
  let mode = resizeMode.split("-");
  let [horizontal, vertical] = mode;
  horizontal = horizontal || vertical;
  vertical = vertical || horizontal;

  if (horizontal === "left") {
    resizeLeft(newPosition, position, mousePosition.x, minWidth);
  } else if (horizontal === "right") {
    resizeRight(newPosition, position, mousePosition.x, minWidth);
  }
  if (vertical === "top") {
    resizeTop(newPosition, position, mousePosition.y, minHeight);
  } else if (vertical === "bottom") {
    resizebottom(newPosition, position, mousePosition.y, minHeight);
  }
  if (horizontal === "move") {
    newPosition.left = mousePosition.x - mouseOffset.x;
    newPosition.top = mousePosition.y - mouseOffset.y;
    newTransparent = true;
  }

  const newBoundsOffset = { ...boundsOffset };
  const { left, width, top, height } = newPosition;
  const right = left + width;
  const bottom = top + height;

  newBoundsOffset.x = Math.min(0, containerSize.width - right);
  newBoundsOffset.y = Math.min(0, containerSize.height - bottom);

  return {
    ...state,
    position: newPosition,
    boundsOffset: newBoundsOffset,
    transparent: newTransparent
  };
}

function resize(state, containerSize) {
  if (!containerSize.width || !containerSize.height) {
    return state;
  }

  const { position, boundsOffset } = state;
  const newPosition = { ...position };

  if (newPosition.left <= 0) {
    newPosition.width = Math.min(
      containerSize.width - newPosition.left - boundsOffset.x,
      newPosition.width
    );
  } else {
    newPosition.left = Math.min(
      containerSize.width - newPosition.width - boundsOffset.x,
      newPosition.left
    );
  }

  if (newPosition.top <= 0) {
    newPosition.height = Math.min(
      containerSize.height - newPosition.top - boundsOffset.y,
      newPosition.height
    );
  } else {
    newPosition.top = Math.min(
      containerSize.height - newPosition.height - boundsOffset.y,
      newPosition.top
    );
  }

  return {
    ...state,
    position: newPosition
  };
}

function resizeLeft(newPosition, position, clientX, minWidth) {
  const adjClientX = Math.min(
    clientX,
    position.left + position.width - minWidth
  );
  newPosition.width -= adjClientX - position.left;
  newPosition.left = adjClientX;

  return newPosition;
}

function resizeRight(newPosition, position, clientX, minWidth) {
  newPosition.width = Math.max(clientX - position.left, minWidth);
  return newPosition;
}

function resizeTop(newPosition, position, clientY, minHeight) {
  const adjClientY = Math.min(
    clientY,
    position.top + position.height - minHeight
  );
  newPosition.height -= adjClientY - position.top;
  newPosition.height = Math.max(newPosition.height, minHeight);
  newPosition.top = adjClientY;

  return newPosition;
}

function resizebottom(newPosition, position, clientY, minHeight) {
  newPosition.height = Math.max(clientY - position.top, minHeight);
  return newPosition;
}

export default windowReducer;
