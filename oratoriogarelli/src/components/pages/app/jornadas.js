import React, { useState, useRef } from 'react'; // Importa useRef
import Sidebar from '../../navigation/sidebar';
import { ReactComponent as Journal } from '../../../assets/Landing/journal.svg';
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
} from "@chakra-ui/react";
import { AddIcon, EditIcon, DeleteIcon } from "@chakra-ui/icons";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { useNavigate } from 'react-router-dom'; // Importa useNavigate
import jornadasData from '../d/jordata'; // Ajusta la ruta según tu estructura de proyecto

// Función para generar un identificador aleatorio en el formato especificado
function generateRandomId() {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
        const r = (Math.random() * 16) | 0;
        const v = c === "x" ? r : (r & 0x3) | 0x8;
        return v.toString(16);
    });
}

const Jornadas = () => {
    const navigate = useNavigate(); // Hook para navegación
    const { isOpen, onOpen, onClose } = useDisclosure();
    const { isOpen: isEditOpen, onOpen: onEditOpen, onClose: onEditClose } = useDisclosure();
    const { isOpen: isAlertOpen, onOpen: onAlertOpen, onClose: onAlertClose } = useDisclosure();
    const toast = useToast();

    // Crear referencias con useRef para evitar llamadas condicionales a hooks
    const cancelRef = useRef();
    const initialRef = useRef();
    const finalRef = useRef();

    const [jornadas, setJornadas] = useState(jornadasData);
    const [formValues, setFormValues] = useState({
        id_jornada: "",
        fecha: "",
        descripcion: "",
    });
    const [selectedJornada, setSelectedJornada] = useState(null);
    const [jornadaToDelete, setJornadaToDelete] = useState(null);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormValues({
            ...formValues,
            [name]: value,
        });
    };

    const handleAddJornada = () => {
        const newJornada = {
            ...formValues,
            id_jornada: generateRandomId(),
        };
        setJornadas([...jornadas, newJornada]);
        onClose();
        toast({
            title: "Jornada creada correctamente.",
            status: "success",
            isClosable: true,
        });
    };

    const handleEditClick = (jornada) => {
        setSelectedJornada(jornada);
        setFormValues(jornada);
        onEditOpen();
    };

    const handleSaveEdit = () => {
        const updatedJornadas = jornadas.map((jornada) =>
            jornada.id_jornada === selectedJornada.id_jornada ? formValues : jornada
        );
        setJornadas(updatedJornadas);
        onEditClose();
        toast({
            title: "Jornada actualizada correctamente.",
            status: "success",
            isClosable: true,
        });
    };

    const handleDeleteClick = (jornada) => {
        setJornadaToDelete(jornada);
        onAlertOpen();
    };

    const handleDeleteConfirm = () => {
        const updatedJornadas = jornadas.filter(
            (jornada) => jornada.id_jornada !== jornadaToDelete.id_jornada
        );
        setJornadas(updatedJornadas);
        onAlertClose();
        toast({
            title: "Jornada eliminada correctamente.",
            status: "success",
            isClosable: true,
        });
    };

    const handleViewMore = (id_jornada) => {
        navigate(`/jornadas/${id_jornada}`); // Navegar a la página de detalles de la jornada
    };

    const handleAddClick = () => {
        setFormValues({
            id_jornada: "",
            fecha: "",
            descripcion: "",
        });
        onOpen();
    };

    return (
        <div className='flex bg-gray'>
            <Sidebar />
            <div className='p-8'>
                <h1 className='text-3xl font-semibold text-darkblue'>Jornadas</h1>
                <div className='flex flex-wrap justify-start gap-8 py-8'>
                    {jornadas.map((jornada) => (
                        <div key={jornada.id_jornada} className='flex flex-col px-4 py-8 shadow-lg bg-white2 max-w-96 rounded-xl'>
                            <div className='flex items-center justify-between'>
                                <div className='flex items-center'>
                                    <Journal />
                                    <p className='pl-4 font-semibold'>{jornada.fecha}</p>
                                </div>
                                <Menu>
                                    <MenuButton as={IconButton} icon={<BiDotsVerticalRounded />} variant="outline" />
                                    <MenuList>
                                        <MenuItem icon={<EditIcon />} onClick={() => handleEditClick(jornada)}>
                                            Editar
                                        </MenuItem>
                                        <MenuItem icon={<DeleteIcon />} onClick={() => handleDeleteClick(jornada)}>
                                            Eliminar
                                        </MenuItem>
                                    </MenuList>
                                </Menu>
                            </div>
                            <div className='flex items-center pl-8 ml-4 border-l-2 border-pink'>
                                <p>{jornada.descripcion}</p>
                            </div>
                            {/* Botón de Ver Más */}
                            <Button
                            className='mt-4 rounded-lg bg-pink text-white2'
                                mt={4}
                                colorScheme=""
                                onClick={() => handleViewMore(jornada.id_jornada)}
                            >
                                Ver más
                            </Button>
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

            {/* Modal para agregar nueva jornada */}
            <Modal initialFocusRef={initialRef} finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Agregar Jornada</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody pb={6}>
                        <FormControl>
                            <FormLabel>Fecha</FormLabel>
                            <Input ref={initialRef} name="fecha" type="date" value={formValues.fecha} onChange={handleInputChange} />
                        </FormControl>
                        <FormControl mt={4}>
                            <FormLabel>Descripción</FormLabel>
                            <Input name="descripcion" value={formValues.descripcion} onChange={handleInputChange} placeholder="Descripción de la jornada" />
                        </FormControl>
                    </ModalBody>
                    <ModalFooter>
                        <Button colorScheme="teal" mr={3} onClick={handleAddJornada}>Agregar</Button>
                        <Button ref={finalRef} onClick={onClose}>Cancelar</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>

            {/* Modal para editar jornada */}
            <Modal isOpen={isEditOpen} onClose={onEditClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Editar Jornada</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody pb={6}>
                        <FormControl>
                            <FormLabel>Fecha</FormLabel>
                            <Input name="fecha" type="date" value={formValues.fecha} onChange={handleInputChange} />
                        </FormControl>
                        <FormControl mt={4}>
                            <FormLabel>Descripción</FormLabel>
                            <Input name="descripcion" value={formValues.descripcion} onChange={handleInputChange} placeholder="Descripción de la jornada" />
                        </FormControl>
                    </ModalBody>
                    <ModalFooter>
                        <Button colorScheme="blue" mr={3} onClick={handleSaveEdit}>Guardar</Button>
                        <Button onClick={onEditClose}>Cancelar</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>

            {/* AlertDialog para confirmación de eliminación */}
            <AlertDialog isOpen={isAlertOpen} leastDestructiveRef={cancelRef} onClose={onAlertClose}>
                <AlertDialogOverlay>
                    <AlertDialogContent>
                        <AlertDialogHeader fontSize="lg" fontWeight="bold">Eliminar Jornada</AlertDialogHeader>
                        <AlertDialogBody>¿Estás seguro? No puedes deshacer esta acción después.</AlertDialogBody>
                        <AlertDialogFooter>
                            <Button ref={cancelRef} onClick={onAlertClose}>Cancelar</Button>
                            <Button colorScheme="red" onClick={handleDeleteConfirm} ml={3}>Eliminar</Button>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialogOverlay>
            </AlertDialog>
        </div>
    );
};

export default Jornadas;
