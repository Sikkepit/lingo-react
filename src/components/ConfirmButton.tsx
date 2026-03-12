type ConfirmButtonProps = { onClick: () => void; disabled: boolean };

export default function ConfirmButton({ onClick, disabled }: ConfirmButtonProps) {
	return (
		<button type="button" onClick={onClick} disabled={disabled}>
			Bevestigen
		</button>
	);
}
