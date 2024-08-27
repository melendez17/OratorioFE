import React, { useState, useRef } from 'react';
import Sidebar from '../../navigation/sidebar';
import { AddIcon } from '@chakra-ui/icons';
import { Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, FormControl, FormLabel, Input, useDisclosure, AlertDialog, AlertDialogOverlay, AlertDialogContent, AlertDialogHeader, AlertDialogBody, AlertDialogFooter, useToast } from '@chakra-ui/react';
import participantesData from '../d/partdata'; // Ajusta la ruta según tu estructura de proyecto

const Participantes = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const { isOpen: isAlertOpen, onOpen: onAlertOpen, onClose: onAlertClose } = useDisclosure();
    const { isOpen: isAddOpen, onOpen: onAddOpen, onClose: onAddClose } = useDisclosure();
    const cancelRef = useRef();
    const toast = useToast();
    const [participantes, setParticipantes] = useState(participantesData);
    const [selectedParticipante, setSelectedParticipante] = useState(null);
    const [formValues, setFormValues] = useState({
        cedula: '',
        nombre: '',
        apellido1: '',
        apellido2: '',
        fechaNacimiento: '',
        fechaIngreso: '',
        correo: '',
        telefono: '',
        condicion: '',
        residencia: ''
    });
    const [participanteToDelete, setParticipanteToDelete] = useState(null);

    const handleEditClick = (participante) => {
        setSelectedParticipante(participante);
        setFormValues(participante);
        onOpen();
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormValues({
            ...formValues,
            [name]: value,
        });
    };

    const handleSave = () => {
        const index = participantes.findIndex(part => part.cedula === selectedParticipante.cedula);
        if (index !== -1) {
            const updatedParticipantes = [...participantes];
            updatedParticipantes[index] = formValues;
            setParticipantes(updatedParticipantes);
            toast({
                title: "Participante actualizado correctamente.",
                status: "success",
                isClosable: true,
            });
        }
        onClose();
    };

    const handleDelete = () => {
        const updatedParticipantes = participantes.filter(part => part.cedula !== participanteToDelete.cedula);
        setParticipantes(updatedParticipantes);
        onAlertClose();
        toast({
            title: "Participante eliminado correctamente.",
            status: "success",
            isClosable: true,
        });
    };

    const confirmDelete = (participante) => {
        setParticipanteToDelete(participante);
        onAlertOpen();
    };

    const handleAddNew = () => {
        const newParticipantes = [...participantes, formValues];
        setParticipantes(newParticipantes);
        onAddClose();
        toast({
            title: "Participante creado correctamente.",
            status: "success",
            isClosable: true,
        });
    };

    const handleAddClick = () => {
        setFormValues({
            cedula: '',
            nombre: '',
            apellido1: '',
            apellido2: '',
            fechaNacimiento: '',
            fechaIngreso: '',
            correo: '',
            telefono: '',
            condicion: '',
            residencia: ''
        });
        onAddOpen();
    };

    return (
        <div className='flex bg-gray'>
            <Sidebar />
            <div className='flex flex-col w-full p-8'>
                <h1 className='text-2xl font-semibold'>Participantes</h1>
                <section className="w-full px-4 mx-auto">
                    <div className="flex flex-col mt-6">
                        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                                <div className="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg">
                                    <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                                        <thead className="bg-gray-50 dark:bg-gray-800">
                                            <tr>
                                                <th className="py-3.5 px-4 text-sm font-normal text-left text-gray-500 dark:text-gray-400">Cédula</th>
                                                <th className="py-3.5 px-4 text-sm font-normal text-left text-gray-500 dark:text-gray-400">Nombre Completo</th>
                                                <th className="px-4 py-3.5 text-sm font-normal text-left text-gray-500 dark:text-gray-400">Fecha de Nacimiento</th>
                                                <th className="px-4 py-3.5 text-sm font-normal text-left text-gray-500 dark:text-gray-400">Fecha de Ingreso</th>
                                                <th className="px-4 py-3.5 text-sm font-normal text-left text-gray-500 dark:text-gray-400">Correo</th>
                                                <th className="px-4 py-3.5 text-sm font-normal text-left text-gray-500 dark:text-gray-400">Teléfono</th>
                                                <th className="px-4 py-3.5 text-sm font-normal text-left text-gray-500 dark:text-gray-400">Condición</th>
                                                <th className="px-4 py-3.5 text-sm font-normal text-left text-gray-500 dark:text-gray-400">Residencia</th>
                                                <th className="relative py-3.5 px-4"><span className="sr-only">Acciones</span></th>
                                            </tr>
                                        </thead>
                                        <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
                                            {participantes.map((participante) => (
                                                <tr key={participante.cedula}>
                                                    <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">{participante.cedula}</td>
                                                    <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                                                        {participante.nombre} {participante.apellido1} {participante.apellido2}
                                                    </td>
                                                    <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">{participante.fechaNacimiento}</td>
                                                    <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">{participante.fechaIngreso}</td>
                                                    <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">{participante.correo}</td>
                                                    <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">{participante.telefono}</td>
                                                    <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">{participante.condicion}</td>
                                                    <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">{participante.residencia}</td>
                                                    <td className="px-4 py-4 text-sm whitespace-nowrap">
                                                        <Button colorScheme="blue" onClick={() => handleEditClick(participante)} mr={2}>Editar</Button>
                                                        <Button colorScheme="red" onClick={() => confirmDelete(participante)}>Eliminar</Button>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Botón flotante para agregar */}
                <div className='absolute bottom-8 right-8'>
                    <Button colorScheme="teal" size="lg" onClick={handleAddClick} borderRadius="full">
                        <AddIcon />
                    </Button>
                </div>

                {/* Modal de edición */}
                <Modal initialFocusRef={React.useRef(null)} finalFocusRef={React.useRef(null)} isOpen={isOpen} onClose={onClose}>
                    <ModalOverlay />
                    <ModalContent>
                        <ModalHeader>Editar Participante</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody pb={6}>
                            {/* Contenedor para dividir en dos columnas */}
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem' }}>
                                <FormControl>
                                    <FormLabel>Cédula</FormLabel>
                                    <Input name="cedula" value={formValues.cedula} onChange={handleInputChange} placeholder="Cédula" readOnly />
                                </FormControl>
                                <FormControl>
                                    <FormLabel>Nombre</FormLabel>
                                    <Input name="nombre" value={formValues.nombre} onChange={handleInputChange} placeholder="Nombre" />
                                </FormControl>
                                <FormControl>
                                    <FormLabel>Apellido 1</FormLabel>
                                    <Input name="apellido1" value={formValues.apellido1} onChange={handleInputChange} placeholder="Apellido 1" />
                                </FormControl>
                                <FormControl>
                                    <FormLabel>Apellido 2</FormLabel>
                                    <Input name="apellido2" value={formValues.apellido2} onChange={handleInputChange} placeholder="Apellido 2" />
                                </FormControl>
                                <FormControl>
                                    <FormLabel>Fecha de Nacimiento</FormLabel>
                                    <Input name="fechaNacimiento" value={formValues.fechaNacimiento} onChange={handleInputChange} placeholder="Fecha de Nacimiento" />
                                </FormControl>
                                <FormControl>
                                    <FormLabel>Fecha de Ingreso</FormLabel>
                                    <Input name="fechaIngreso" value={formValues.fechaIngreso} onChange={handleInputChange} placeholder="Fecha de Ingreso" />
                                </FormControl>
                                <FormControl>
                                    <FormLabel>Correo</FormLabel>
                                    <Input name="correo" value={formValues.correo} onChange={handleInputChange} placeholder="Correo" />
                                </FormControl>
                                <FormControl>
                                    <FormLabel>Teléfono</FormLabel>
                                    <Input name="telefono" value={formValues.telefono} onChange={handleInputChange} placeholder="Teléfono" />
                                </FormControl>
                                <FormControl>
                                    <FormLabel>Condición</FormLabel>
                                    <Input name="condicion" value={formValues.condicion} onChange={handleInputChange} placeholder="Condición" />
                                </FormControl>
                                <FormControl>
                                    <FormLabel>Residencia</FormLabel>
                                    <Input name="residencia" value={formValues.residencia} onChange={handleInputChange} placeholder="Residencia" />
                                </FormControl>
                            </div>
                        </ModalBody>

                        <ModalFooter>
                            <Button colorScheme="blue" mr={3} onClick={handleSave}>Guardar</Button>
                            <Button onClick={onClose}>Cancelar</Button>
                        </ModalFooter>
                    </ModalContent>
                </Modal>

                {/* Modal para agregar nuevo participante */}
                <Modal initialFocusRef={React.useRef(null)} finalFocusRef={React.useRef(null)} isOpen={isAddOpen} onClose={onAddClose}>
                    <ModalOverlay />
                    <ModalContent>
                        <ModalHeader>Agregar Participante</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody pb={6}>
                            {/* Contenedor para dividir en dos columnas */}
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem' }}>
                                <FormControl>
                                    <FormLabel>Cédula</FormLabel>
                                    <Input name="cedula" value={formValues.cedula} onChange={handleInputChange} placeholder="Cédula" />
                                </FormControl>
                                <FormControl>
                                    <FormLabel>Nombre</FormLabel>
                                    <Input name="nombre" value={formValues.nombre} onChange={handleInputChange} placeholder="Nombre" />
                                </FormControl>
                                <FormControl>
                                    <FormLabel>Apellido 1</FormLabel>
                                    <Input name="apellido1" value={formValues.apellido1} onChange={handleInputChange} placeholder="Apellido 1" />
                                </FormControl>
                                <FormControl>
                                    <FormLabel>Apellido 2</FormLabel>
                                    <Input name="apellido2" value={formValues.apellido2} onChange={handleInputChange} placeholder="Apellido 2" />
                                </FormControl>
                                <FormControl>
                                    <FormLabel>Fecha de Nacimiento</FormLabel>
                                    <Input name="fechaNacimiento" value={formValues.fechaNacimiento} onChange={handleInputChange} placeholder="Fecha de Nacimiento" />
                                </FormControl>
                                <FormControl>
                                    <FormLabel>Fecha de Ingreso</FormLabel>
                                    <Input name="fechaIngreso" value={formValues.fechaIngreso} onChange={handleInputChange} placeholder="Fecha de Ingreso" />
                                </FormControl>
                                <FormControl>
                                    <FormLabel>Correo</FormLabel>
                                    <Input name="correo" value={formValues.correo} onChange={handleInputChange} placeholder="Correo" />
                                </FormControl>
                                <FormControl>
                                    <FormLabel>Teléfono</FormLabel>
                                    <Input name="telefono" value={formValues.telefono} onChange={handleInputChange} placeholder="Teléfono" />
                                </FormControl>
                                <FormControl>
                                    <FormLabel>Condición</FormLabel>
                                    <Input name="condicion" value={formValues.condicion} onChange={handleInputChange} placeholder="Condición" />
                                </FormControl>
                                <FormControl>
                                    <FormLabel>Residencia</FormLabel>
                                    <Input name="residencia" value={formValues.residencia} onChange={handleInputChange} placeholder="Residencia" />
                                </FormControl>
                            </div>
                        </ModalBody>

                        <ModalFooter>
                            <Button colorScheme="teal" mr={3} onClick={handleAddNew}>Agregar</Button>
                            <Button onClick={onAddClose}>Cancelar</Button>
                        </ModalFooter>
                    </ModalContent>
                </Modal>

                {/* AlertDialog para confirmación de eliminación */}
                <AlertDialog
                    isOpen={isAlertOpen}
                    leastDestructiveRef={cancelRef}
                    onClose={onAlertClose}
                >
                    <AlertDialogOverlay>
                        <AlertDialogContent>
                            <AlertDialogHeader fontSize="lg" fontWeight="bold">
                                Eliminar Participante
                            </AlertDialogHeader>

                            <AlertDialogBody>
                                ¿Estás seguro? No puedes deshacer esta acción después.
                            </AlertDialogBody>

                            <AlertDialogFooter>
                                <Button ref={cancelRef} onClick={onAlertClose}>
                                    Cancelar
                                </Button>
                                <Button colorScheme="red" onClick={handleDelete} ml={3}>
                                    Eliminar
                                </Button>
                            </AlertDialogFooter>
                        </AlertDialogContent>
                    </AlertDialogOverlay>
                </AlertDialog>
            </div>
        </div>
    );
};

export default Participantes;
