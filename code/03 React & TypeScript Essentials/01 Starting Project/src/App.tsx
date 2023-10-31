import CourseGoal from "./components/CourseGoal";
import GoalImage from "./assets/goals.jpg";
import Header from "./components/Header";
import { useState } from "react";
import CourseGoalList from "./components/CourseGoalList";

export type CourseGoal = {
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
      <CourseGoalList goals={goals}/>
      <button onClick={handleAddGoal}>ゴールを追加</button>
    </main>
  );
}
