import React from "react";

import styles from "./demo.module.css";

function DemoForm() {
  return (
    <div className={styles.form}>
      <h1 className={styles.formTitle}>Demo Form</h1>
      <p className={styles.formSubtitle}>
        This form does nothing, but feel free to fill it out.
      </p>
      <form onSubmit={e => e.preventDefault()}>
        <label className={styles.formLabel}>
          Name
          <input className={styles.formInput} name="name" />
        </label>
        <label className={styles.formLabel}>
          Email
          <input className={styles.formInput} type="email" name="email" />
        </label>
        <label className={styles.formLabel}>
          Comments
          <textarea
            className={styles.formInput}
            name="comments"
            rows="10"
          ></textarea>
        </label>
        <button className={styles.formButton} type="submit">
          Submit to Nowhere
        </button>
      </form>
    </div>
  );
}

export default DemoForm;
