import React, { useState } from "react";
import Sidebar from "../../navigation/sidebar";
import { Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, FormControl, FormLabel, Input, useDisclosure, useToast, Menu, MenuButton, MenuList, MenuItem, IconButton, AlertDialog, AlertDialogOverlay, AlertDialogContent, AlertDialogHeader, AlertDialogBody, AlertDialogFooter } from '@chakra-ui/react';
import { AddIcon, EditIcon, DeleteIcon } from '@chakra-ui/icons';
import { BiDotsVerticalRounded } from 'react-icons/bi';
import actividadesData from '../d/actdata'; // Ajusta la ruta según tu estructura de proyecto

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
    const [actividades, setActividades] = useState(actividadesData);
    const [formValues, setFormValues] = useState({
        idactividad: '',
        nombre: '',
        duracion: '',
        tipo: '',
        inventario: '',
        descripcion: ''
    });
    const [selectedActividad, setSelectedActividad] = useState(null);
    const [actividadToDelete, setActividadToDelete] = useState(null);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormValues({
            ...formValues,
            [name]: value,
        });
    };

    const handleAddActivity = () => {
        const newActivity = {
            ...formValues,
            idactividad: generateRandomId(), // Asignar un identificador único usando la función
        };
        setActividades([...actividades, newActivity]);
        onClose();
        toast({
            title: "Actividad creada correctamente.",
            status: "success",
            isClosable: true,
        });
    };

    const handleEditClick = (actividad) => {
        setSelectedActividad(actividad);
        setFormValues(actividad);
        onEditOpen();
    };

    const handleSaveEdit = () => {
        const updatedActividades = actividades.map((actividad) =>
            actividad.idactividad === selectedActividad.idactividad ? formValues : actividad
        );
        setActividades(updatedActividades);
        onEditClose();
        toast({
            title: "Actividad actualizada correctamente.",
            status: "success",
            isClosable: true,
        });
    };

    const handleDeleteClick = (actividad) => {
        setActividadToDelete(actividad);
        onAlertOpen();
    };

    const handleDeleteConfirm = () => {
        const updatedActividades = actividades.filter(actividad => actividad.idactividad !== actividadToDelete.idactividad);
        setActividades(updatedActividades);
        onAlertClose();
        toast({
            title: "Actividad eliminada correctamente.",
            status: "success",
            isClosable: true,
        });
    };

    const handleViewClick = (actividad) => {
        setSelectedActividad(actividad);
        onDetailOpen();
    };

    const handleAddClick = () => {
        setFormValues({
            idactividad: '',
            nombre: '',
            duracion: '',
            tipo: '',
            inventario: '',
            descripcion: ''
        });
        onOpen();
    };

    return (
        <div className="flex bg-gray">
            <Sidebar></Sidebar>
            <div className="p-8">
                <h1 className="text-3xl font-semibold text-darkblue">Actividades</h1>
                <div className="flex flex-wrap justify-start gap-8 py-4">
                    {/* Render de actividades dinámicamente */}
                    {actividades.map((actividad) => (
                        <div key={actividad.idactividad} className="flex flex-col justify-between max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow">
                          <div className="flex flex-row justify-between">
                            <h5 className="pr-8 mb-2 text-2xl font-bold tracking-tight text-darkblue">
                                {actividad.nombre}
                            </h5>
                                <Menu>
                                    <MenuButton as={IconButton} icon={<BiDotsVerticalRounded />} variant="outline" />
                                    <MenuList>
                                        <MenuItem icon={<EditIcon />} onClick={() => handleEditClick(actividad)}>Editar</MenuItem>
                                        <MenuItem icon={<DeleteIcon />} onClick={() => handleDeleteClick(actividad)}>Eliminar</MenuItem>
                                    </MenuList>
                                </Menu>
                          </div>
                            <p className="font-normal text-gray-700 dark:text-gray-400">
                                Duración: {actividad.duracion}
                            </p>
                            <p className="font-normal text-gray-700 dark:text-gray-400">
                                Tipo: {actividad.tipo}
                            </p>
                            <div className="flex items-center justify-between">
                                <Button className="w-full py-2 font-semibold text-white rounded-lg " onClick={() => handleViewClick(actividad)}>
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

            {/* Modal para agregar nueva actividad */}
            <Modal initialFocusRef={React.useRef(null)} finalFocusRef={React.useRef(null)} isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Agregar Actividad</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody pb={6}>
                        <FormControl>
                            <FormLabel>Nombre</FormLabel>
                            <Input name="nombre" value={formValues.nombre} onChange={handleInputChange} placeholder="Nombre de la actividad" />
                        </FormControl>
                        <FormControl mt={4}>
                            <FormLabel>Duración</FormLabel>
                            <Input name="duracion" value={formValues.duracion} onChange={handleInputChange} placeholder="Duración" />
                        </FormControl>
                        <FormControl mt={4}>
                            <FormLabel>Tipo</FormLabel>
                            <Input name="tipo" value={formValues.tipo} onChange={handleInputChange} placeholder="Tipo de actividad" />
                        </FormControl>
                        <FormControl mt={4}>
                            <FormLabel>Inventario</FormLabel>
                            <Input name="inventario" value={formValues.inventario} onChange={handleInputChange} placeholder="Inventario necesario" />
                        </FormControl>
                        <FormControl mt={4}>
                            <FormLabel>Descripción</FormLabel>
                            <Input name="descripcion" value={formValues.descripcion} onChange={handleInputChange} placeholder="Descripción detallada" />
                        </FormControl>
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme="teal" mr={3} onClick={handleAddActivity}>Agregar</Button>
                        <Button onClick={onClose}>Cancelar</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>

            {/* Modal para editar actividad */}
            <Modal isOpen={isEditOpen} onClose={onEditClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Editar Actividad</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody pb={6}>
                        <FormControl>
                            <FormLabel>Nombre</FormLabel>
                            <Input name="nombre" value={formValues.nombre} onChange={handleInputChange} placeholder="Nombre de la actividad" />
                        </FormControl>
                        <FormControl mt={4}>
                            <FormLabel>Duración</FormLabel>
                            <Input name="duracion" value={formValues.duracion} onChange={handleInputChange} placeholder="Duración" />
                        </FormControl>
                        <FormControl mt={4}>
                            <FormLabel>Tipo</FormLabel>
                            <Input name="tipo" value={formValues.tipo} onChange={handleInputChange} placeholder="Tipo de actividad" />
                        </FormControl>
                        <FormControl mt={4}>
                            <FormLabel>Inventario</FormLabel>
                            <Input name="inventario" value={formValues.inventario} onChange={handleInputChange} placeholder="Inventario necesario" />
                        </FormControl>
                        <FormControl mt={4}>
                            <FormLabel>Descripción</FormLabel>
                            <Input name="descripcion" value={formValues.descripcion} onChange={handleInputChange} placeholder="Descripción detallada" />
                        </FormControl>
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme="blue" mr={3} onClick={handleSaveEdit}>Guardar</Button>
                        <Button onClick={onEditClose}>Cancelar</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>

            {/* Modal para ver detalles de la actividad */}
            {selectedActividad && (
                <Modal isOpen={isDetailOpen} onClose={onDetailClose}>
                    <ModalOverlay />
                    <ModalContent>
                        <ModalHeader>{selectedActividad.nombre}</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody>
                            <p><strong>Duración:</strong> {selectedActividad.duracion}</p>
                            <p><strong>Tipo:</strong> {selectedActividad.tipo}</p>
                            <p><strong>Inventario:</strong> {selectedActividad.inventario}</p>
                            <p><strong>Descripción:</strong> {selectedActividad.descripcion}</p>
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
                            Eliminar Actividad
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
