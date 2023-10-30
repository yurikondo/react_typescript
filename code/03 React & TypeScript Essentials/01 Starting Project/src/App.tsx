import CourseGoal from "./components/CourseGoal";
import GoalImage from "./assets/goals.jpg";
import Header from "./components/Header";
import { useState } from "react";

type CourseGoal = {
  title: string;
  description: string;
  id: number;
};

export default function App() {
  const [goals, setGoals] = useState<CourseGoal[]>([]);
  const handleAddGoal = () => {
    setGoals((prevGoals) => {
      const newGoal: CourseGoal = {
        id: Math.random(),
        title: "ReactとTS",
        description: "勉強中",
      };
      return [...prevGoals, newGoal];
    });
  };

  return (
    <main>
      <Header image={{ src: GoalImage, alt: "ゴールのリスト" }}>
        <h1>コースのゴール</h1>
      </Header>
      <button onClick={handleAddGoal}>ゴールを追加</button>
      <ul>
        {goals.map((goal) => (
          <li key={goal.id}>
            <CourseGoal title={goal.title}>
              <p>{goal.description}</p>
            </CourseGoal>
          </li>
        ))}
      </ul>
    </main>
  );
}
