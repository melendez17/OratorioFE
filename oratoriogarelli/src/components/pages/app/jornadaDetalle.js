import React, { useState, useRef } from "react";
import Sidebar from "../../navigation/sidebar";
import {
    Button,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    FormControl,
    FormLabel,
    Input,
    useDisclosure,
    useToast,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    IconButton,
    AlertDialog,
    AlertDialogOverlay,
    AlertDialogContent,
    AlertDialogHeader,
    AlertDialogBody,
    AlertDialogFooter,
    Checkbox,
} from '@chakra-ui/react';
import { AddIcon, EditIcon, DeleteIcon } from '@chakra-ui/icons';
import { BiDotsVerticalRounded } from 'react-icons/bi';
import cronogramasData from '../d/crodata'; // Ajusta la ruta según tu estructura de proyecto
import participantesData from '../d/partdata'; // Ajusta la ruta según tu estructura de proyecto

// Función para generar un identificador aleatorio en el formato especificado
function generateRandomId() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        const r = Math.random() * 16 | 0;
        const v = c === 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}

const JornadaDetalle = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const { isOpen: isDetailOpen, onOpen: onDetailOpen, onClose: onDetailClose } = useDisclosure();
    const { isOpen: isEditOpen, onOpen: onEditOpen, onClose: onEditClose } = useDisclosure();
    const { isOpen: isAlertOpen, onOpen: onAlertOpen, onClose: onAlertClose } = useDisclosure();
    const toast = useToast();
    const [cronogramas, setCronogramas] = useState(cronogramasData);
    const [formValues, setFormValues] = useState({
        id_cronograma: '',
        etapa: '',
        tema: {
            título: '',
            descripción: '',
        },
        actividades: []
    });
    const [selectedCronograma, setSelectedCronograma] = useState(null);
    const [cronogramaToDelete, setCronogramaToDelete] = useState(null);
    const [newActivity, setNewActivity] = useState({
        nombre: '',
        descripcion: '',
        duracion: ''
    });
    const [participantes, setParticipantes] = useState(participantesData.map(p => ({ ...p, attended: false })));
    const [asistenciaData, setAsistenciaData] = useState([]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        if (name.includes('tema.')) {
            const temaKey = name.split('.')[1];
            setFormValues({
                ...formValues,
                tema: {
                    ...formValues.tema,
                    [temaKey]: value,
                }
            });
        } else {
            setFormValues({
                ...formValues,
                [name]: value,
            });
        }
    };

    const handleNewActivityChange = (e) => {
        const { name, value } = e.target;
        setNewActivity({
            ...newActivity,
            [name]: value,
        });
    };

    const handleAddCronograma = () => {
        const newCronograma = {
            ...formValues,
            id_cronograma: generateRandomId(),
        };
        setCronogramas([...cronogramas, newCronograma]);
        onClose();
        toast({
            title: "Cronograma creado correctamente.",
            status: "success",
            isClosable: true,
        });
    };

    const handleEditClick = (cronograma) => {
        setSelectedCronograma(cronograma);
        setFormValues(cronograma);
        onEditOpen();
    };

    const handleSaveEdit = () => {
        const updatedCronogramas = cronogramas.map((cronograma) =>
            cronograma.id_cronograma === selectedCronograma.id_cronograma ? formValues : cronograma
        );
        setCronogramas(updatedCronogramas);
        onEditClose();
        toast({
            title: "Cronograma actualizado correctamente.",
            status: "success",
            isClosable: true,
        });
    };

    const handleDeleteClick = (cronograma) => {
        setCronogramaToDelete(cronograma);
        onAlertOpen();
    };

    const handleDeleteConfirm = () => {
        const updatedCronogramas = cronogramas.filter(cronograma => cronograma.id_cronograma !== cronogramaToDelete.id_cronograma);
        setCronogramas(updatedCronogramas);
        onAlertClose();
        toast({
            title: "Cronograma eliminado correctamente.",
            status: "success",
            isClosable: true,
        });
    };

    const handleViewClick = (cronograma) => {
        setSelectedCronograma(cronograma);
        onDetailOpen();
    };

    const handleAddActivityToCronograma = () => {
        const updatedCronogramas = cronogramas.map((cronograma) =>
            cronograma.id_cronograma === selectedCronograma.id_cronograma
                ? { ...cronograma, actividades: [...cronograma.actividades, newActivity] }
                : cronograma
        );
        setCronogramas(updatedCronogramas);
        setNewActivity({ nombre: '', descripcion: '', duracion: '' });
        toast({
            title: "Actividad agregada al cronograma.",
            status: "success",
            isClosable: true,
        });
    };

    const handleAttendanceChange = (cedula) => {
        const updatedParticipantes = participantes.map(participante =>
            participante.cedula === cedula
                ? { ...participante, attended: !participante.attended }
                : participante
        );
        setParticipantes(updatedParticipantes);
    };

    const handleSaveAttendance = () => {
        const attendedParticipants = participantes.filter(participante => participante.attended);
        setAsistenciaData(attendedParticipants);
        toast({
            title: "Asistencia guardada correctamente.",
            status: "success",
            isClosable: true,
        });
        console.log("Asistencia guardada:", attendedParticipants); // Aquí puedes implementar la lógica de guardar en un archivo o en un backend
    };

    const handleAddClick = () => {
        setFormValues({
            id_cronograma: '',
            etapa: '',
            tema: {
                título: '',
                descripción: '',
            },
            actividades: []
        });
        onOpen();
    };

    return (
        <div className="flex bg-gray">
            <Sidebar />
            <div className="p-8">
                <h1 className="text-3xl font-semibold text-darkblue">Cronogramas</h1>
                <div className="flex flex-wrap justify-start gap-8 py-4">
                    {cronogramas.map((cronograma) => (
                        <div key={cronograma.id_cronograma} className="flex flex-col justify-between max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow">
                            <div className="flex flex-row justify-between">
                                <h5 className="pr-8 mb-2 text-2xl font-bold tracking-tight text-darkblue">
                                    {cronograma.tema.título}
                                </h5>
                                <Menu>
                                    <MenuButton as={IconButton} icon={<BiDotsVerticalRounded />} variant="outline" />
                                    <MenuList>
                                        <MenuItem icon={<EditIcon />} onClick={() => handleEditClick(cronograma)}>Editar</MenuItem>
                                        <MenuItem icon={<DeleteIcon />} onClick={() => handleDeleteClick(cronograma)}>Eliminar</MenuItem>
                                    </MenuList>
                                </Menu>
                            </div>
                            <p className="font-normal text-gray-700 dark:text-gray-400">
                                Etapa: {cronograma.etapa}
                            </p>
                            <p className="font-normal text-gray-700 dark:text-gray-400">
                                Descripción: {cronograma.tema.descripción}
                            </p>
                            <div className="flex items-center justify-between">
                                <Button className="w-full py-2 font-semibold text-white rounded-lg" onClick={() => handleViewClick(cronograma)}>
                                    Ver
                                </Button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Modal para ver detalles del cronograma y agregar actividades */}
                {selectedCronograma && (
                    <Modal isOpen={isDetailOpen} onClose={onDetailClose}>
                        <ModalOverlay />
                        <ModalContent>
                            <ModalHeader>{selectedCronograma.tema.título}</ModalHeader>
                            <ModalCloseButton />
                            <ModalBody>
                                <p><strong>Etapa:</strong> {selectedCronograma.etapa}</p>
                                <p><strong>Descripción:</strong> {selectedCronograma.tema.descripción}</p>
                                <p><strong>Actividades:</strong></p>
                                <ul>
                                    {selectedCronograma.actividades.map((actividad, index) => (
                                        <div className="">
                                            <li key={index} className="p-4 my-4 shadow-lg bg-gray rounded-xl">
                                                <div className="font-semibold">
                                                {actividad.nombre}
                                                </div>
                                                <div>
                                                {actividad.duracion}
                                                </div>
                                                <div>
                                                {actividad.descripcion}
                                                </div>
                                            </li>
                                        </div>
                                    ))}
                                </ul>
                                <FormControl mt={4}>
                                    <FormLabel>Nombre de la Actividad</FormLabel>
                                    <Input name="nombre" value={newActivity.nombre} onChange={handleNewActivityChange} placeholder="Nombre" />
                                </FormControl>
                                <FormControl mt={4}>
                                    <FormLabel>Duración</FormLabel>
                                    <Input name="duracion" value={newActivity.duracion} onChange={handleNewActivityChange} placeholder="Duración" />
                                </FormControl>
                                <FormControl mt={4}>
                                    <FormLabel>Descripción</FormLabel>
                                    <Input name="descripcion" value={newActivity.descripcion} onChange={handleNewActivityChange} placeholder="Descripción" />
                                </FormControl>
                                <Button mt={4} colorScheme="teal" onClick={handleAddActivityToCronograma}>Agregar Actividad</Button>
                            </ModalBody>
                            <ModalFooter>
                                <Button onClick={onDetailClose}>Cerrar</Button>
                            </ModalFooter>
                        </ModalContent>
                    </Modal>
                )}

                {/* Botón flotante para agregar */}
                <div className="absolute bottom-8 right-8">
                    <Button colorScheme="teal" size="lg" onClick={handleAddClick} borderRadius="full">
                        <AddIcon />
                    </Button>
                </div>

                {/* Modal para agregar nuevo cronograma */}
                <Modal initialFocusRef={useRef(null)} finalFocusRef={useRef(null)} isOpen={isOpen} onClose={onClose}>
                    <ModalOverlay />
                    <ModalContent>
                        <ModalHeader>Agregar Cronograma</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody pb={6}>
                            <FormControl>
                                <FormLabel>Etapa</FormLabel>
                                <Input name="etapa" value={formValues.etapa} onChange={handleInputChange} placeholder="Etapa" />
                            </FormControl>
                            <FormControl mt={4}>
                                <FormLabel>Título del Tema</FormLabel>
                                <Input name="tema.título" value={formValues.tema.título} onChange={handleInputChange} placeholder="Título del tema" />
                            </FormControl>
                            <FormControl mt={4}>
                                <FormLabel>Descripción del Tema</FormLabel>
                                <Input name="tema.descripción" value={formValues.tema.descripción} onChange={handleInputChange} placeholder="Descripción del tema" />
                            </FormControl>
                        </ModalBody>
                        <ModalFooter>
                            <Button colorScheme="teal" mr={3} onClick={handleAddCronograma}>Agregar</Button>
                            <Button onClick={onClose}>Cancelar</Button>
                        </ModalFooter>
                    </ModalContent>
                </Modal>

                {/* Modal para editar cronograma */}
                <Modal isOpen={isEditOpen} onClose={onEditClose}>
                    <ModalOverlay />
                    <ModalContent>
                        <ModalHeader>Editar Cronograma</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody pb={6}>
                            <FormControl>
                                <FormLabel>Etapa</FormLabel>
                                <Input name="etapa" value={formValues.etapa} onChange={handleInputChange} placeholder="Etapa" />
                            </FormControl>
                            <FormControl mt={4}>
                                <FormLabel>Título del Tema</FormLabel>
                                <Input name="tema.título" value={formValues.tema.título} onChange={handleInputChange} placeholder="Título del tema" />
                            </FormControl>
                            <FormControl mt={4}>
                                <FormLabel>Descripción del Tema</FormLabel>
                                <Input name="tema.descripción" value={formValues.tema.descripción} onChange={handleInputChange} placeholder="Descripción del tema" />
                            </FormControl>
                        </ModalBody>
                        <ModalFooter>
                            <Button colorScheme="blue" mr={3} onClick={handleSaveEdit}>Guardar</Button>
                            <Button onClick={onEditClose}>Cancelar</Button>
                        </ModalFooter>
                    </ModalContent>
                </Modal>

                {/* AlertDialog para confirmación de eliminación */}
                <AlertDialog isOpen={isAlertOpen} leastDestructiveRef={useRef()} onClose={onAlertClose}>
                    <AlertDialogOverlay>
                        <AlertDialogContent>
                            <AlertDialogHeader fontSize="lg" fontWeight="bold">
                                Eliminar Cronograma
                            </AlertDialogHeader>
                            <AlertDialogBody>
                                ¿Estás seguro? No puedes deshacer esta acción después.
                            </AlertDialogBody>
                            <AlertDialogFooter>
                                <Button ref={useRef()} onClick={onAlertClose}>
                                    Cancelar
                                </Button>
                                <Button colorScheme="red" onClick={handleDeleteConfirm} ml={3}>
                                    Eliminar
                                </Button>
                            </AlertDialogFooter>
                        </AlertDialogContent>
                    </AlertDialogOverlay>
                </AlertDialog>

                {/* Tabla de Asistencia */}
                <h2 className="mt-8 text-2xl font-semibold text-darkblue">Asistencia</h2>
                <div className="flex flex-col mt-6">
                    <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                            <div className="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg">
                                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                                    <thead className="bg-gray-50 dark:bg-gray-800">
                                        <tr>
                                            <th className="py-3.5 px-4 text-sm font-normal text-left text-gray-500 dark:text-gray-400">Cédula</th>
                                            <th className="py-3.5 px-4 text-sm font-normal text-left text-gray-500 dark:text-gray-400">Nombre Completo</th>
                                            <th className="px-4 py-3.5 text-sm font-normal text-left text-gray-500 dark:text-gray-400">Asistencia</th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
                                        {participantes.map((participante) => (
                                            <tr key={participante.cedula}>
                                                <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">{participante.cedula}</td>
                                                <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                                                    {participante.nombre} {participante.apellido1} {participante.apellido2}
                                                </td>
                                                <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                                                    <Checkbox isChecked={participante.attended} onChange={() => handleAttendanceChange(participante.cedula)}>
                                                        Asistió
                                                    </Checkbox>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    {/* Botón para guardar asistencia */}
                    <Button colorScheme="teal" size="md" mt={4} onClick={handleSaveAttendance}>
                        Guardar Asistencia
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default JornadaDetalle;
