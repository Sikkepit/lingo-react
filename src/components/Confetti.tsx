export default function Confetti() {
	const getConfetti = () => (
		<>
			{Array.from({ length: 40 }).map((_, i) => (
				<div
					key={i}
					className="confetti__piece"
					style={{
						left: `${Math.random() * 100}%`,
						animationDuration: `${Math.random() * 2 + 2}s`,
						backgroundColor: `hsl(${Math.random() * 360}, 70%, 60%)`,
					}}
				/>
			))}
		</>
	);

	return <div className="confetti">{getConfetti()}</div>;
}
