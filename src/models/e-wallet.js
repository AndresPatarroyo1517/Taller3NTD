const mongoose = require("mongoose"); 
const walletSchema = mongoose.Schema({
    usuario: {
        type: String,
        required: true,
    },
    correoElectronico: {
        type: String,
        required: false,
    },
    saldo: {
        type: Number,
        required: true,
    },
    historialTransacciones: {
        type: [{
            fecha: {
                type: Date,
                required: true,
            },
            descripcion: {
                type: String,
                required: false,
            },
            monto: {
                type: Number,
                required: true,
            }
        }],
        default: []
    },
    tarjetasAsociadas: {
        type: [{
            tipo: {
                type: String,
                required: true,
            },
            numero: {
                type: String,
                required: true,
            },
            fechaExpiracion: {
                type: String,
                required: true,
            }
        }],
        default: []
    },
    direccionEnvio: {
        calle: {
            type: String,
            required: false,
        },
        ciudad: {
            type: String,
            required: false,
        },
        pais: {
            type: String,
            required: false,
        }
    }
});

module.exports = mongoose.model('EWallet', walletSchema);