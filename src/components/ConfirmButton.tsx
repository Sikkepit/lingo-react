export default function ConfirmButton({ onClick, disabled }: { onClick: () => void; disabled: boolean }) {
	return (
		<button type="button" onClick={onClick} disabled={disabled}>
			Bevestigen
		</button>
	);
}
