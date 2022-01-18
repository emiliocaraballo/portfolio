
import knex from 'knex';
import knexfile from '../../../database/knexfile';
import { IQueryResponse } from '../../../interfaces/postgres_responses';
import { IProject } from './helper';
const bd=knex(knexfile);
class ProjectModel {
    private table: string = 'projects';
    private dato_public=["id"];
    public create=async(data: IProject): Promise<IQueryResponse> => {
        const { name,mail,subject,message }: IProject = data;
        const result=await bd(this.table).insert({name:name.trim(),mail:mail.trim(),subject:subject.trim(),message:message.trim(),created_at:bd.fn.now()},this.dato_public);
         return {
            ok:  result[0].id.length>0,
            data: result[0]
         }
    }
}
export const projectModel = new ProjectModel;