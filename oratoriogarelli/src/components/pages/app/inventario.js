import React, { useState } from "react";
import Sidebar from "../../navigation/sidebar";
import { Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, FormControl, FormLabel, Input, useDisclosure, useToast, Menu, MenuButton, MenuList, MenuItem, IconButton, AlertDialog, AlertDialogOverlay, AlertDialogContent, AlertDialogHeader, AlertDialogBody, AlertDialogFooter } from '@chakra-ui/react';
import { AddIcon, EditIcon, DeleteIcon } from '@chakra-ui/icons';
import { BiDotsVerticalRounded } from 'react-icons/bi';
import inventarioData from '../d/objdata'; // Ajusta la ruta según tu estructura de proyecto

// Función para generar un identificador aleatorio en el formato especificado
function generateRandomId() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        const r = Math.random() * 16 | 0;
        const v = c === 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}

const Inventario = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const { isOpen: isDetailOpen, onOpen: onDetailOpen, onClose: onDetailClose } = useDisclosure();
    const { isOpen: isEditOpen, onOpen: onEditOpen, onClose: onEditClose } = useDisclosure();
    const { isOpen: isAlertOpen, onOpen: onAlertOpen, onClose: onAlertClose } = useDisclosure();
    const toast = useToast();
    const [objetos, setObjetos] = useState(inventarioData);
    const [formValues, setFormValues] = useState({
        id_objeto: '',
        nombre: '',
        cantidad: '',
        ubicacion: ''
    });
    const [selectedObjeto, setSelectedObjeto] = useState(null);
    const [objetoToDelete, setObjetoToDelete] = useState(null);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormValues({
            ...formValues,
            [name]: value,
        });
    };

    const handleAddObject = () => {
        const newObject = {
            ...formValues,
            id_objeto: generateRandomId(), // Asignar un identificador único usando la función
        };
        setObjetos([...objetos, newObject]);
        onClose();
        toast({
            title: "Objeto creado correctamente.",
            status: "success",
            isClosable: true,
        });
    };

    const handleEditClick = (objeto) => {
        setSelectedObjeto(objeto);
        setFormValues(objeto);
        onEditOpen();
    };

    const handleSaveEdit = () => {
        const updatedObjetos = objetos.map((objeto) =>
            objeto.id_objeto === selectedObjeto.id_objeto ? formValues : objeto
        );
        setObjetos(updatedObjetos);
        onEditClose();
        toast({
            title: "Objeto actualizado correctamente.",
            status: "success",
            isClosable: true,
        });
    };

    const handleDeleteClick = (objeto) => {
        setObjetoToDelete(objeto);
        onAlertOpen();
    };

    const handleDeleteConfirm = () => {
        const updatedObjetos = objetos.filter(objeto => objeto.id_objeto !== objetoToDelete.id_objeto);
        setObjetos(updatedObjetos);
        onAlertClose();
        toast({
            title: "Objeto eliminado correctamente.",
            status: "success",
            isClosable: true,
        });
    };

    const handleViewClick = (objeto) => {
        setSelectedObjeto(objeto);
        onDetailOpen();
    };

    const handleAddClick = () => {
        setFormValues({
            id_objeto: '',
            nombre: '',
            cantidad: '',
            ubicacion: ''
        });
        onOpen();
    };

    return (
        <div className="flex bg-gray">
            <Sidebar></Sidebar>
            <div className="p-8">
                <h1 className="text-3xl font-semibold text-darkblue">Inventario</h1>
                <div className="flex flex-wrap justify-start gap-8 py-4">
                    {/* Render de objetos dinámicamente */}
                    {objetos.map((objeto) => (
                        <div key={objeto.id_objeto} className="flex flex-col justify-between max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow">
                          <div className="flex flex-row justify-between">
                            <h5 className="pr-8 mb-2 text-2xl font-bold tracking-tight text-darkblue">
                                {objeto.nombre}
                            </h5>
                                <Menu>
                                    <MenuButton as={IconButton} icon={<BiDotsVerticalRounded />} variant="outline" />
                                    <MenuList>
                                        <MenuItem icon={<EditIcon />} onClick={() => handleEditClick(objeto)}>Editar</MenuItem>
                                        <MenuItem icon={<DeleteIcon />} onClick={() => handleDeleteClick(objeto)}>Eliminar</MenuItem>
                                    </MenuList>
                                </Menu>
                          </div>
                            <p className="font-normal text-gray-700 dark:text-gray-400">
                                Cantidad: {objeto.cantidad}
                            </p>
                            <p className="font-normal text-gray-700 dark:text-gray-400">
                                Ubicación: {objeto.ubicacion}
                            </p>
                            <div className="flex items-center justify-between">
                                <Button className="w-full py-2 my-2 font-semibold text-white rounded-lg " onClick={() => handleViewClick(objeto)}>
                                    Ver
                                </Button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Botón flotante para agregar */}
            <div className="absolute bottom-8 right-8">
                <Button colorScheme="teal" size="lg" onClick={handleAddClick} borderRadius="full">
                    <AddIcon />
                </Button>
            </div>

            {/* Modal para agregar nuevo objeto */}
            <Modal initialFocusRef={React.useRef(null)} finalFocusRef={React.useRef(null)} isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Agregar Objeto</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody pb={6}>
                        <FormControl>
                            <FormLabel>Nombre</FormLabel>
                            <Input name="nombre" value={formValues.nombre} onChange={handleInputChange} placeholder="Nombre del objeto" />
                        </FormControl>
                        <FormControl mt={4}>
                            <FormLabel>Cantidad</FormLabel>
                            <Input name="cantidad" value={formValues.cantidad} onChange={handleInputChange} placeholder="Cantidad" type="number" />
                        </FormControl>
                        <FormControl mt={4}>
                            <FormLabel>Ubicación</FormLabel>
                            <Input name="ubicacion" value={formValues.ubicacion} onChange={handleInputChange} placeholder="Ubicación" />
                        </FormControl>
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme="teal" mr={3} onClick={handleAddObject}>Agregar</Button>
                        <Button onClick={onClose}>Cancelar</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>

            {/* Modal para editar objeto */}
            <Modal isOpen={isEditOpen} onClose={onEditClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Editar Objeto</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody pb={6}>
                        <FormControl>
                            <FormLabel>Nombre</FormLabel>
                            <Input name="nombre" value={formValues.nombre} onChange={handleInputChange} placeholder="Nombre del objeto" />
                        </FormControl>
                        <FormControl mt={4}>
                            <FormLabel>Cantidad</FormLabel>
                            <Input name="cantidad" value={formValues.cantidad} onChange={handleInputChange} placeholder="Cantidad" type="number" />
                        </FormControl>
                        <FormControl mt={4}>
                            <FormLabel>Ubicación</FormLabel>
                            <Input name="ubicacion" value={formValues.ubicacion} onChange={handleInputChange} placeholder="Ubicación" />
                        </FormControl>
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme="blue" mr={3} onClick={handleSaveEdit}>Guardar</Button>
                        <Button onClick={onEditClose}>Cancelar</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>

            {/* Modal para ver detalles del objeto */}
            {selectedObjeto && (
                <Modal isOpen={isDetailOpen} onClose={onDetailClose}>
                    <ModalOverlay />
                    <ModalContent>
                        <ModalHeader>{selectedObjeto.nombre}</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody>
                            <p><strong>Cantidad:</strong> {selectedObjeto.cantidad}</p>
                            <p><strong>Ubicación:</strong> {selectedObjeto.ubicacion}</p>
                        </ModalBody>
                        <ModalFooter>
                            <Button onClick={onDetailClose}>Cerrar</Button>
                        </ModalFooter>
                    </ModalContent>
                </Modal>
            )}

            {/* AlertDialog para confirmación de eliminación */}
            <AlertDialog isOpen={isAlertOpen} leastDestructiveRef={React.useRef()} onClose={onAlertClose}>
                <AlertDialogOverlay>
                    <AlertDialogContent>
                        <AlertDialogHeader fontSize="lg" fontWeight="bold">
                            Eliminar Objeto
                        </AlertDialogHeader>
                        <AlertDialogBody>
                            ¿Estás seguro? No puedes deshacer esta acción después.
                        </AlertDialogBody>
                        <AlertDialogFooter>
                            <Button ref={React.useRef()} onClick={onAlertClose}>
                                Cancelar
                            </Button>
                            <Button colorScheme="red" onClick={handleDeleteConfirm} ml={3}>
                                Eliminar
                            </Button>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialogOverlay>
            </AlertDialog>
        </div>
    );
};

export default Inventario;
