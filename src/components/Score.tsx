import { useLingo } from "../context/LingoContext";

export default function Score() {
	const { score } = useLingo();

	return <span className="score">Score: {score}</span>;
}
