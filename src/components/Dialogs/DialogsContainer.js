import { connect } from 'react-redux';
import { Dialogs } from './Dialogs';

const mapStateToProps = state => {
	return (
		{
			dialogItems: state.dialogsPage.dialogItems,
			messageItems: state.dialogsPage.messageItems,
		}
	)
}

export const DialogsContainer = connect(mapStateToProps, {})(Dialogs)