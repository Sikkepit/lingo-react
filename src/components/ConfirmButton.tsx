type ConfirmButtonProps = { onClick: () => void; disabled: boolean };

export default function ConfirmButton({ onClick, disabled }: ConfirmButtonProps) {
	return (
		<button type="button" className="submit" onClick={onClick} disabled={disabled}>
			OK
		</button>
	);
}
