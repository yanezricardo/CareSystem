using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Microsoft.LightSwitch;
namespace LightSwitchApplication {
    public partial class Cita {
        partial void Fin_Validate(EntityValidationResultsBuilder results) {            
            if (Inicio > Fin) {
                results.AddEntityError(String.Format("La fecha y hora de finalización debe ser mayor que {0}", Inicio));
            }
        }
    }
}
