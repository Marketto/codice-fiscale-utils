import IBelfioreDbData from "./belfiore-db-data.interface";
import IBelfioreDbLicense from "./belfiore-db-license.interface";

export default interface IBelfioreDb {
    data: IBelfioreDbData[];
    licenses: IBelfioreDbLicense[];
    sources: string[];
}
