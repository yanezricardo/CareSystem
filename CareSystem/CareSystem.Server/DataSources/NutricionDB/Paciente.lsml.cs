﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Microsoft.LightSwitch;

namespace LightSwitchApplication {
    public partial class Paciente {
        partial void FullName_Compute(ref string result) {
            // Set result to the desired field value
            result = string.Format("({0}) - {1} {2}", Cedula, Nombre, Apellido);
        }

        partial void Paciente_Created() {       
        }
    }
}
