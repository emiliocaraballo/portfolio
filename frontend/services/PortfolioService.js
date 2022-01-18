
import BaseService from "./BaseService";
class MenuService extends BaseService {
  constructor() {
    super();
  }
  createContact(data){
    return this.Any("portfolio/contact","POST",{
        name:data.name,
        mail:data.mail,
        subject:data.subject,
        message:data.message
    });
  }
  createPortfolio(data){
    return this.Any("portfolio/project","POST",{
        name:data.name,
        mail:data.mail,
        subject:data.subject,
        message:data.message
    });
  }
}
export default new MenuService();
