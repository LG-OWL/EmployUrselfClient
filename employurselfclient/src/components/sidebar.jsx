import { ProSidebar, Menu, MenuItem, SubMenu, SidebarHeader, SidebarFooter, SidebarContent } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    Sidebar: {
      float: 'left'
    },
}));


export default function Sidebar(){
    const classes = useStyles();
    return(
        <ProSidebar className={classes.Sidebar}>
            <SidebarHeader>
                <h2>EmployUrself</h2>
            </SidebarHeader>
            <SidebarContent>
                <Menu iconShape="square">
                    <MenuItem >Dashboard</MenuItem>
                    <SubMenu title="Components" >
                    <MenuItem>Component 1</MenuItem>
                    <MenuItem>Component 2</MenuItem>
                    </SubMenu>
                </Menu>
            </SidebarContent>
            <SidebarFooter>
                <h2>©Team of EmployUrself</h2>
            </SidebarFooter>
        </ProSidebar>
    )
}