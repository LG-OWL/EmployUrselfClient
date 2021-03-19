import { ProSidebar, Menu, MenuItem, SubMenu, SidebarHeader, SidebarFooter, SidebarContent } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    sidebar: {
      float: 'left'
    },
    header: {
        height: 50
    }
}));


export default function Sidebar(){
    const classes = useStyles();
    return(
        <ProSidebar className={classes.sidebar}>
            <SidebarHeader className={classes.header}>
                <h2>EmployUrself</h2>
            </SidebarHeader>
            <SidebarContent>
                <Menu iconShape="square">
                    <MenuItem >
                        Profil
                        <Link to="/" />
                    </MenuItem>
                    <MenuItem>
                        Bewerbungsprozess
                        <Link to="/search" />
                    </MenuItem>
                    <MenuItem>
                        Offene Bewerbungen
                        <Link to="/applications" />
                    </MenuItem>
                </Menu>
            </SidebarContent>
            <SidebarFooter>
                <h2>©Team of EmployUrself</h2>
            </SidebarFooter>
        </ProSidebar>
    )
}