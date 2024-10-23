import { useEffect } from 'react';
import { Modal, Form, Alert, Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form'
import useAuth from '../../auth/UseAuth';
import roles from '../../herpser/roles';
import chageacoount from '../../validation/chageacoount';

export default function EditModal({ open, close, user ,account}) {
	const { register, handleSubmit, formState: { errors, dirtyFields }, reset } = useForm({ resolver: chageacoount });
	const {  updateUser, hasRol } = useAuth()

	const isDirty = !!Object.keys(dirtyFields).length; 

	const onSubmit = (formData) => {
		if(!isDirty) return;

		let newUserData;
		if(formData.role) {
			newUserData = formData;
		} else {
			const { role, ...resFormData} = formData;
			newUserData = resFormData;
		}

		updateUser(newUserData)
		close()
	}

	useEffect(() => {
		if(!open) {
			reset()
		}
	}, [ open, reset])

	useEffect(() => {
		if(user) reset({
			name: user.name,
			Mail: user.mail,
			role: user.role
		});
	}, [user, reset])

	return (
		<Modal show={account} onHide={close}>
			<Modal.Header closeButton>
				<Modal.Title>edit account</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<Form onSubmit={handleSubmit(onSubmit)}>
					<Form.Group>
						<Form.Label>Name</Form.Label>
						<Form.Control 
							type="text"
							placeholder="write your new name"
							{...register("name")}
						/>
						{errors?.name && (
							<Form.Text>
							<Alert variant="danger">
								{errors.name.message}
							</Alert>
						</Form.Text>
							)}
					</Form.Group>
					<Form.Group>
						<Form.Label>Email</Form.Label>
						<Form.Control 
							type="email"
							placeholder="write your new email"
							{...register("Mail")}
						/>
						{errors?.Mail && (
							<Form.Text>
							<Alert variant="danger">
								{errors.Mail.message}
							</Alert>
						</Form.Text>
							)}
					</Form.Group>
					<Form.Group>
						<Form.Label>Rol</Form.Label>
						<Form.Control 
							as="select"
							disabled={!hasRol('admin')}
							{...register("rol")}
						>
						
								<option>administrador</option>
                <option>administrador</option>
							
						</Form.Control>
						{errors?.role && (
							<Form.Text>
							<Alert variant="danger">
								{errors.role.message}
							</Alert>
						</Form.Text>
							)}
					</Form.Group>
				</Form>
			</Modal.Body>
			<Modal.Footer>
				<Button variant="secondary" onClick={close}>
					Cancel
				</Button>
				<Button variant="primary" onClick={handleSubmit(onSubmit)}
					disabled={!isDirty}
				>
				update my account
				</Button>
			</Modal.Footer>
		</Modal>
	)}