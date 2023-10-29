type CourseGoalProps = {
  title: string;
  description: string;
}

const CourseGoal = ({
  title,
  description,
}: CourseGoalProps) => {
  return (
    <article>
      <div>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <button>DELETE</button>
    </article>
  );
};

export default CourseGoal;
