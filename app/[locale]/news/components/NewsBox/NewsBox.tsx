import Image from "next/image";
import styles from "./NewsBox.module.scss";
import { NewsBoxPropsInterface } from "./interfaces/news-box-props.interface";
import { Link } from "@/i18n/navigation";

const NewsBox = (props: NewsBoxPropsInterface) => {
  return (
    <Link href={`/detailedNews/${props.id}`}>
      <div className={styles.wrapper}>
        <Image src={props.image} alt="News Cover" width={440} height={240} />
        <div className={styles.contentWrapper}>
          <span>{props.date}</span>
          <div className={styles.titleWrapper}>
            <h2>{props.title}</h2>
            <Image src={"/arrowUp.svg"} alt="Arrow Up" width={24} height={24} />
          </div>
          <p>{props.description}</p>
        </div>
      </div>
    </Link>
  );
};

export default NewsBox;
