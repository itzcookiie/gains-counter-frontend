import styles from './index.module.scss';

interface Props {
  statResults: {
    field: string;
    score: number;
    target?: string;
  }[]
}

export default function Stats({ statResults }: Props) {
    return (
      <div className={styles.flex_parent}>
      {statResults.map((statResult, index) => (
        <div key={index} className={styles.flex_child}>
          <p className={styles.field}>{statResult.field}</p>
          <p className={styles.result}>{statResult.score}/100</p>
        </div>
      ))}
      </div>
    )
}