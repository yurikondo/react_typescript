import CourseGoal from "./components/CourseGoal";
import GoalImage from "./assets/goals.jpg";
import Header from "./components/Header";

type CourseGoal = {
  title: string;
  description: string;
  id: number;
};

export default function App() {
  const [goals, setGoals] = useState<CourseGoal[]>([]);
  const handleAddGoal = () => {
    setGoals();
  };

  return (
    <main>
      <Header image={{ src: GoalImage, alt: "ゴールのリスト" }}>
        <h1>コースのゴール</h1>
      </Header>
      <button onClick={handleAddGoal}>ゴールを追加</button>
      <CourseGoal title="タイトル">
        <p>説明書き</p>
      </CourseGoal>
    </main>
  );
}
