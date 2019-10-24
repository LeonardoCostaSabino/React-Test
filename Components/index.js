import Login from "./LoginComponent";
import Chamada from "./ChamadaComponent";
import Presenca from "./PresencaComponent";

import { createAppContainer, createSwitchNavigator } from "react-navigation";

const Routes = createAppContainer(
    createSwitchNavigator({
        Login_Home: Login,
        Aluno_Presenca: Presenca,
        Professor_Chamada: Chamada
    })
);

export default Routes;