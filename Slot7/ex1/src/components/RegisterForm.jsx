// Bài 2: BÀI 2 — Elementary: Form Đăng Ký

// Mục tiêu: Quản lý nhiều state trong một form, 
// validate dữ liệu, hiển thị thông báo lỗi.
// Kiến thức: `useState` với Object, controlled components, validation.
// Yêu cầu
// Form đăng ký gồm: Họ tên, Email, Mật khẩu, Xác nhận mật khẩu.
//  Validate trước khi submit và hiển thị thông báo thành công.
import React, { useState } from 'react';
import { Container, Form } from 'react-bootstrap';
import { Button, Col, Row } from 'react-bootstrap';
import { Alert } from 'react-bootstrap';
function RegisterForm() {
    const [formData, setFormData] = useState({
        fullName:'',
        email:'',
        password:'',
        confirmPassword:''
    })
    const [errors, setErrors] = useState({}); 
    const [alert, setAlert] = useState({
        show: false,
        message:'',
        variant:''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));

        setErrors(prev => {
            if (!prev[name]) return prev;
            const { [name]: _, ...rest } = prev;
            return rest;
        });

        if (alert.show) setAlert({ show: false, message: '', variant: '' });
    };

    const validate = () => {
        const newErrors = {}; 
        if (!formData.fullName) newErrors.fullName = 'Họ tên là bắt buộc';
        if (!formData.email) newErrors.email = 'Email là bắt buộc';
        else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email không hợp lệ';
        if(!formData.password) newErrors.password = 'Mật khẩu là bắt buộc';
        else if (formData.password.length < 6) newErrors.password = 'Mật khẩu phải có ít nhất 6 ký tự';
        if (!formData.confirmPassword) newErrors.confirmPassword = 'Xác nhận mật khẩu là bắt buộc';
        else if (formData.confirmPassword !== formData.password) newErrors.confirmPassword = 'Xác nhận mật khẩu không khớp';
        return newErrors;
    }

    const handleSubmit = (e) => {
        e.preventDefault(); 
        const validationErrors = validate(); 
        if(Object.keys(validationErrors).length==0){
            console.log('Đăng ký thành công', formData);
            setFormData({
                fullName:'',
                email:'',
                password:'',
                confirmPassword:''
            });
            setErrors({});
            setAlert({
                show: true,
                message: 'Đăng ký thành công!',
                variant: 'success'
            });
        }

        else {
            setErrors(validationErrors);
            
        }

    }
    return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={6}>
          <h1 className="text-center mb-4">Form Đăng Ký</h1>
            {alert.show &&  alert.variant==='success' && (
                <Alert variant={alert.variant} onClose={() =>setAlert({
                    show: false,
                    message:'',
                    variant:''
                })} dismissible>
                    {alert.message}
                </Alert>
            )}
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="fullName">
                <Form.Label>Họ tên</Form.Label>
                <Form.Control
                type="text"
                placeholder="Nhập họ tên"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                isInvalid={!!errors.fullName}
                />
                <Form.Control.Feedback type="invalid">
                {errors.fullName}
                </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control
                type="email"
                placeholder="Nhập email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                isInvalid={!!errors.email}
                />
                <Form.Control.Feedback type="invalid">
                {errors.email}
                </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="password">
                <Form.Label>Mật khẩu</Form.Label>
                <Form.Control
                type="password"
                placeholder="Nhập mật khẩu"
                name="password"
                value={formData.password}
                onChange={handleChange}
                isInvalid={!!errors.password}
                />
                <Form.Control.Feedback type="invalid">
                {errors.password}
                </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="confirmPassword">
                <Form.Label>Xác nhận mật khẩu</Form.Label>
                <Form.Control
                type="password"
                placeholder="Xác nhận mật khẩu"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                isInvalid={!!errors.confirmPassword}
                />
                <Form.Control.Feedback type="invalid">
                {errors.confirmPassword}
                </Form.Control.Feedback>
            </Form.Group>

            <Button variant="primary" type="submit" className="w-100">
                Đăng ký
            </Button>
            </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default RegisterForm