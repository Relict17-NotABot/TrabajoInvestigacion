
import { prisma } from "../src/config/prisma";
import bcrypt from "bcryptjs";

async function main() {
    console.log("Iniciando seed...");
     // Roles
    const administrador = await prisma.rol.upsert({
        where: { nombre: "Administrador" },
        update: {},
        create: {
            nombre: "Administrador",
            descripcion: "Usuario con acceso completo al sistema.",
            activo: true,
        },
    });

    await prisma.rol.upsert({
        where: { nombre: "Empleado" },
        update: {},
        create: {
            nombre: "Empleado",
            descripcion: "Usuario encargado de atender citas asignadas.",
            activo: true,
        },
    });

    await prisma.rol.upsert({
        where: { nombre: "Cliente" },
        update: {},
        create: {
            nombre: "Cliente",
            descripcion: "Usuario que puede consultar sus citas y cancelarlas cuando corresponda.",
            activo: true,
        },
    });

    // Estados de cita
    await prisma.estadoCita.upsert({
        where: { nombre: "Pendiente" },
        update: {},
        create: {
            nombre: "Pendiente",
            descripcion: "Cita registrada, pendiente de confirmación.",
            bloqueaDisponibilidad: true,
            permiteCancelacionCliente: true,
            permiteEdicion: true,
            color: "amarillo",
            orden: 1,
            activo: true,
        },
    });

    await prisma.estadoCita.upsert({
        where: { nombre: "Confirmada" },
        update: {},
        create: {
            nombre: "Confirmada",
            descripcion: "Cita confirmada por el establecimiento.",
            bloqueaDisponibilidad: true,
            permiteCancelacionCliente: false,
            permiteEdicion: true,
            color: "azul",
            orden: 2,
            activo: true,
        },
    });

    await prisma.estadoCita.upsert({
        where: { nombre: "En proceso" },
        update: {},
        create: {
            nombre: "En proceso",
            descripcion: "Cita que se encuentra siendo atendida.",
            bloqueaDisponibilidad: true,
            permiteCancelacionCliente: false,
            permiteEdicion: false,
            color: "morado",
            orden: 3,
            activo: true,
        },
    });

    await prisma.estadoCita.upsert({
        where: { nombre: "Finalizada" },
        update: {},
        create: {
            nombre: "Finalizada",
            descripcion: "Cita atendida y finalizada.",
            bloqueaDisponibilidad: false,
            permiteCancelacionCliente: false,
            permiteEdicion: false,
            color: "verde",
            orden: 4,
            activo: true,
        },
    });

    await prisma.estadoCita.upsert({
        where: { nombre: "Cancelada" },
        update: {},
        create: {
            nombre: "Cancelada",
            descripcion: "Cita cancelada. No bloquea disponibilidad.",
            bloqueaDisponibilidad: false,
            permiteCancelacionCliente: false,
            permiteEdicion: false,
            color: "rojo",
            orden: 5,
            activo: true,
        },
    });

    // Días de semana
    const dias = [
        { nombre: "Lunes", numeroOrden: 1 },
        { nombre: "Martes", numeroOrden: 2 },
        { nombre: "Miércoles", numeroOrden: 3 },
        { nombre: "Jueves", numeroOrden: 4 },
        { nombre: "Viernes", numeroOrden: 5 },
        { nombre: "Sábado", numeroOrden: 6 },
        { nombre: "Domingo", numeroOrden: 7 },
    ];

    for (const dia of dias) {
        await prisma.diaSemana.upsert({
            where: { nombre: dia.nombre },
            update: {},
            create: dia,
        });
    }

    // Tipos de restricción
    await prisma.tipoRestriccionHorario.upsert({
        where: { nombre: "General del establecimiento" },
        update: {},
        create: {
            nombre: "General del establecimiento",
            descripcion: "Restricción que afecta a todos los empleados del establecimiento.",
        },
    });

    await prisma.tipoRestriccionHorario.upsert({
        where: { nombre: "Específica de empleado" },
        update: {},
        create: {
            nombre: "Específica de empleado",
            descripcion: "Restricción que afecta únicamente a un empleado específico.",
        },
    });

    await prisma.tipoRestriccionHorario.upsert({
        where: { nombre: "Parcial por horas" },
        update: {},
        create: {
            nombre: "Parcial por horas",
            descripcion: "Restricción aplicada a un rango específico de horas.",
        },
    });

    await prisma.tipoRestriccionHorario.upsert({
        where: { nombre: "Día completo" },
        update: {},
        create: {
            nombre: "Día completo",
            descripcion: "Restricción que bloquea todo el día seleccionado.",
        },
    });

    // Especialidad base
    await prisma.especialidad.upsert({
        where: { nombre: "General" },
        update: {},
        create: {
            nombre: "General",
            descripcion: "Especialidad base para servicios y empleados generales.",
            activo: true,
        },
    });

    // Usuario administrador
    const passwordHash = await bcrypt.hash("Admin12345", 10);

    const adminUser = await prisma.usuario.upsert({
        where: { correo: "admin@citas.com" },
        update: {},
        create: {
            nombre: "Administrador",
            primerApellido: "Sistema",
            segundoApellido: null,
            correo: "admin@citas.com",
            telefono: "88888888",
            passwordHash,
            activo: true,
            rolId: administrador.id,
        },
    });

    // Empleados de ejemplo para la página de Impacto
    const empleadoRol = await prisma.rol.findUnique({
        where: { nombre: "Empleado" },
    });

    const generalEspecialidad = await prisma.especialidad.findUnique({
        where: { nombre: "General" },
    });

    // Crear servicio base si no existe
    const servicioBase = await prisma.servicio.upsert({
        where: { nombre: "Consulta General" },
        update: {},
        create: {
            nombre: "Consulta General",
            descripcion: "Servicio de consultoría general para clientes.",
            precioBase: 50000.00,
            duracionMinutos: 60,
            activo: true,
            especialidadId: generalEspecialidad!.id,
        },
    });

    const empleadosData = [
        {
            nombre: "María",
            primerApellido: "Fernández",
            segundoApellido: "López",
            correo: "maria.fernandez@citas.com",
            telefono: "88881111",
            codigo: "EMP-001",
            descripcion: "Desarrolladora Frontend con passión por la accesibilidad web. A pesar de su ceguera parcial, utiliza lectores de pantalla y navegación por teclado para crear interfaces inclusivas.",
        },
        {
            nombre: "Carlos",
            primerApellido: "Mora",
            segundoApellido: "Rojas",
            correo: "carlos.mora@citas.com",
            telefono: "88882222",
            codigo: "EMP-002",
            descripcion: "Diseñador UX comprometido con la experiencia de todos los usuarios. Con baja visión, entiende firsthand la importancia de contraste, tipografía legible y navegación clara.",
        },
        {
            nombre: "Laura",
            primerApellido: "Torres",
            segundoApellido: "García",
            correo: "laura.torres@citas.com",
            telefono: "88883333",
            codigo: "EMP-003",
            descripcion: "Ingeniera de Software que supera barreras cada día. Su discapacidad motora no le impide liderar proyectos completos cuando la interfaz le permite navegar con teclado o voice control.",
        },
        {
            nombre: "Pedro",
            primerApellido: "Sánchez",
            segundoApellido: "Vargas",
            correo: "pedro.sanchez@citas.com",
            telefono: "88884444",
            codigo: "EMP-004",
            descripcion: "Analista de Datos con condiciones cognitivas que hacen que la predictibilidad sea esencial. Cuando la navegación es consistente y las instrucciones claras, su rendimiento supera expectativas.",
        },
        {
            nombre: "Ana",
            primerApellido: "Rojas",
            segundoApellido: "Silva",
            correo: "ana.rojas@citas.com",
            telefono: "88885555",
            codigo: "EMP-005",
            descripcion: "Project Manager que comprende que la accesibilidad beneficia a todos. Un día su brazo está lesionado, otro necesita zoom alto. La accesibilidad no es solo para discapacidades permanentes.",
        },
    ];

    for (const emp of empleadosData) {
        const usuario = await prisma.usuario.upsert({
            where: { correo: emp.correo },
            update: {},
            create: {
                nombre: emp.nombre,
                primerApellido: emp.primerApellido,
                segundoApellido: emp.segundoApellido,
                correo: emp.correo,
                telefono: emp.telefono,
                passwordHash,
                activo: true,
                rolId: empleadoRol!.id,
            },
        });

        await prisma.empleado.upsert({
            where: { codigoEmpleado: emp.codigo },
            update: {},
            create: {
                usuarioId: usuario.id,
                especialidadId: generalEspecialidad!.id,
                codigoEmpleado: emp.codigo,
                descripcion: emp.descripcion,
                activo: true,
                servicios: {
                    connect: [{ id: servicioBase.id }],
                },
            },
        });
    }

    console.log("Seeder ejecutado correctamente.");
}

main()
    .catch((e) => {
        console.error("Error en seed:", e);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });