import { Moment } from "moment";
import IBelfioreDB from "./belfiore-db.interface";

export default interface IBelfioreConnectorCommonConfig {
    data: IBelfioreDB[];
    licenses: string[];
    activeDate?: Moment;
}
