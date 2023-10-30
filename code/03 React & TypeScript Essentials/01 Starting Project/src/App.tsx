import CourseGoal from "./components/CourseGoal";
import GoalImage from "./assets/goals.jpg";
import Header from "./components/Header";

export default function App() {
  return (
    <main>
      <Header image={{ src: GoalImage, alt: "ゴールのリスト" }}>
        <h1>コースのゴール</h1>
      </Header>
      <CourseGoal title="タイトル">
        <p>説明書き</p>
      </CourseGoal>
    </main>
  );
}
