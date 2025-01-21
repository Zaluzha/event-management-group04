'use client';

import { useRouter } from 'next/navigation';
import axios from 'axios';
import Cookies from 'js-cookie';
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import { Input } from './../components/ui/input';
import { Checkbox } from './../components/ui/checkbox';

interface LoginFormValues {
  email: string;
  password: string;
  remember: boolean;
}

export function LoginForm() {
  const router = useRouter();

  const initialValues: LoginFormValues = {
    email: '',
    password: '',
    remember: false,
  };

  const validationSchema = Yup.object({
    email: Yup.string().email('Email is not valid').required('Must be filled'),
    password: Yup.string().required('Must be filled'),
  });

  const handleSubmit = async (
    values: LoginFormValues,
    { setSubmitting }: FormikHelpers<LoginFormValues>,
  ) => {
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_API_URL}login`,
        {
          email: values.email,
          password: values.password,
        },
      );

      if (response.status === 200) {
        const { token } = response.data.data; // Akses token dari response.data.data
        if (token) {
          Cookies.set('token', token, { expires: 7 }); // Simpan token dalam cookie selama 7 hari
          console.log('Login success');
          router.push('/');
        } else {
          console.error('Token not found in response');
        }
      } else {
        console.error('Login failed');
      }
    } catch (error) {
      console.error('Terjadi kesalahan', error);
    }
    setSubmitting(false);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form className="flex flex-col items-center justify-center h-full px-12 bg-white">
          <h2 className="text-3xl font-bold text-blue-800">
            Sign in to Account
          </h2>
          <h1 className="text-3xl font-bold mb-4"> </h1>
          <div className="inline-block w-10 mb-2 border-2 border-blue-800"></div>
          <h1 className="text-3xl font-bold mb-4"> </h1>
          <Field
            name="email"
            type="email"
            placeholder="Email"
            as={Input}
            className="mb-4 text-gray-500"
          />
          <ErrorMessage
            name="email"
            component="div"
            className="text-red-500 mb-4"
          />
          <Field
            name="password"
            type="password"
            placeholder="Password"
            as={Input}
            className="mb-4 text-gray-500"
          />
          <ErrorMessage
            name="password"
            component="div"
            className="text-red-500 mb-4"
          />
          <div className="flex justify-between items-center w-full mb-4">
            <div className="flex items-center">
              <Field
                name="remember"
                type="checkbox"
                as={Checkbox}
                className="mr-2"
              />
              <label htmlFor="remember" className="text-gray-400">
                Remember me
              </label>
            </div>
            <a href="#" className="text-sm text-gray-600 hover:text-[#4bb6b7]">
              Forgot Password
            </a>
          </div>
          <button
            type="submit"
            className="inline-block px-12 py-2 font-semibold border-2 border-blue-800 rounded-full bg-blue-800 hover:text-white"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Logging in...' : 'Login'}
          </button>
        </Form>
      )}
    </Formik>
  );
}
