import CounterRepository from "../repository/counterRepository";
import HomeBloc from "./homeBloc";

const counterRepository = new CounterRepository();
const homeBloc = new HomeBloc(counterRepository);

export { homeBloc };
