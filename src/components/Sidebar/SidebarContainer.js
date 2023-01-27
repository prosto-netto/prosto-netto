import { connect } from 'react-redux';
import { Sidebar } from './Sidebar';


const mapStateToProps = state => (
	{
		asideLinks: state.sidebar.asideLinks,
	}
)

export const SidebarContainer = connect(mapStateToProps, {})(Sidebar)