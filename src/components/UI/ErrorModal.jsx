import Button from "./Button";
import Card from "./Card";
import styles from "./ErrorModal.module.css";
const ErrorModall = (props) => {
  console.log(props.onConfirm);
  return (
    <div className={styles.backdrop}>
      <Card className={styles.modal}>
        <header className={styles.header}>
          <h1>{props.title}</h1>
        </header>
        <div className={styles.content}>
          <h1>{props.message}</h1>
        </div>
        <footer className={styles.actions}>
          <Button onClick={props.onConfirm}>Okay</Button>
        </footer>
      </Card>
    </div>
  );
};
export default ErrorModall;