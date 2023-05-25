
(function() {
    let DB;
    document.addEventListener('DOMContentLoaded', () => {
        createDB();
    });
        //Crea la base de datos de indexDB
        function createDB() {
            //Se abre la conexion de la base de datos
            const crearDB = window.indexedDB.open("crm", 1);

            crearDB.onerror = function() {
                console.error("Error");
            };

            crearDB.onsuccess = function() {
                DB = crearDB.result;
            }

            //Registra todas las columnas, se ejecuta una sola vez
            crearDB.onupgradeneeded = function(e) {
                const db = e.target.result;

                const objectStore = db.objectStore("crm", { keypath: "id", autoIncrement: true});
                objectStore.createIndex("nombre", "nombre", { unique: false });
                objectStore.createIndex("email", "email", { unique: false });
                objectStore.createIndex("telefono", "telefono", { unique: false });
                objectStore.createIndex("empresa", "empresa", { unique: false });
                objectStore.createIndex("id", "id", { unique: true });

                console.log("DB Lista y creada");
            }
        }    
})();