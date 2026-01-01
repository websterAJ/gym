import sequelize from './models';
import { initializeModels } from './models/all_models';
import { User, Customer, Role, GymClass, Branch } from './models/all_models';
import './models/index_init'; // Asegurar que las asociaciones se carguen

async function testAssociations() {
  try {
    console.log('🚀 Iniciando prueba de asociaciones...');
    
    // Inicializar modelos y asociaciones
    initializeModels();
    
    // Probar conexión a la base de datos
    await sequelize.authenticate();
    console.log('✅ Conexión a la base de datos exitosa');
    
    // Sincronizar modelos (sin borrar datos)
    await sequelize.sync({ alter: false });
    console.log('✅ Modelos sincronizados');
    
    // Probar asociación User → Role
    console.log('\n📋 Probando asociación User → Role...');
    const usersWithRoles = await User.findAll({
      include: [{ model: Role, as: 'role' }]
    });
    console.log(`✅ Encontrados ${usersWithRoles.length} usuarios con sus roles`);
    
    // Probar asociación Customer → User
    console.log('\n👥 Probando asociación Customer → User...');
    const customersWithUsers = await Customer.findAll({
      include: [{ model: User }]
    });
    console.log(`✅ Encontrados ${customersWithUsers.length} clientes con sus usuarios`);
    
    // Probar asociación GymClass → User (instructor)
    console.log('\n🏋️ Probando asociación GymClass → User (instructor)...');
    const classesWithInstructors = await GymClass.findAll({
      include: [{ model: User, as: 'instructor' }]
    });
    console.log(`✅ Encontradas ${classesWithInstructors.length} clases con sus instructores`);
    
    // Probar asociación GymClass → Branch
    console.log('\n🏢 Probando asociación GymClass → Branch...');
    const classesWithBranches = await GymClass.findAll({
      include: [{ model: Branch, as: 'branch' }]
    });
    console.log(`✅ Encontradas ${classesWithBranches.length} clases con sus sucursales`);
    
    console.log('\n🎉 Todas las asociaciones funcionan correctamente!');
    
  } catch (error) {
    console.error('❌ Error en la prueba de asociaciones:', error);
  } finally {
    await sequelize.close();
  }
}

testAssociations();