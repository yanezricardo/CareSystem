using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Microsoft.LightSwitch;
using Microsoft.LightSwitch.Security.Server;
using System.Linq.Expressions;

namespace LightSwitchApplication {
    public partial class NutricionDBService {
        partial void TotalComidaByEvaluacionNutricionalId_PreprocessQuery(int? Id, ref IQueryable<Comida> query)
        {
        }

        partial void AlimentosByComidaId_PreprocessQuery(int? ComidaId, ref IQueryable<Alimento> query)
        {
            query = query.Where(x => x.Comida.Id == ComidaId);
        }

        partial void Pacientes_Filter(ref Expression<Func<Paciente, bool>> filter) {   
            //this.Application.User.ro
            //if (!this.Application.User.HasPermission(Permissions.ViewAllEmployeeBenefitInformation)) {
            //    filter = e => e.CreatedBy == this.Application.User.Name;
            //}

            var UserRoles = string.Join(";", System.Web.Security.Roles.GetRolesForUser());     
        }
    }
}
