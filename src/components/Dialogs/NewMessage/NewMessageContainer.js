import { connect } from 'react-redux';
import { NewMessage } from './NewMessage'
import { addMessage, updateMessage } from '../../../redux/dialogsReducer'

const mapStateToProps = state => ({ newMessageText: state.dialogsPage.newMessageText })

export const NewMessageContainer = connect(mapStateToProps, { addMessage, updateMessage })(NewMessage)