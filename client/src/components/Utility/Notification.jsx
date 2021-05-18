import Alert from "@material-ui/lab/Alert"
import Collapse from "@material-ui/core/Collapse"
import IconButton from "@material-ui/core/IconButton"
import CloseIcon from "@material-ui/icons/Close"

const Notification = props => {
	const { severity, message, open, setOpen } = props

	return (
		<Collapse in={open} style={{ position: "fixed", bottom: "10px" }}>
			<Alert
				action={
					<IconButton
						aria-label="close"
						color="inherit"
						size="small"
						onClick={() => {
							setOpen(false)
						}}
					>
						<CloseIcon fontSize="inherit" />
					</IconButton>
				}
				variant="filled"
				severity={severity}
			>
				{message}
			</Alert>
		</Collapse>
	)
}

export default Notification
