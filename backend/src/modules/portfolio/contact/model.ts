
import knex from 'knex';
import knexfile from '../../../database/knexfile';
import { IQueryResponse } from '../../../interfaces/postgres_responses';
import { IContact } from './helper';
const bd=knex(knexfile);
class ContactModel {
    private table: string = 'contacts';
    private dato_public=["id"];
    public create=async(data: IContact): Promise<IQueryResponse> => {
        const { name,mail,subject,message }: IContact = data;
        const result=await bd(this.table).insert({name:name.trim(),mail:mail.trim(),subject:subject.trim(),message:message.trim(),created_at:bd.fn.now()},this.dato_public);
         return {
            ok:  result[0].id.length>0,
            data: result[0]
         }
    }
}
export const contactModel = new ContactModel;