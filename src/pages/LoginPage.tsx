import React from "react";
import { useForm, SubmitHandler } from "react-hook-form"
import {useBackendStore} from "../store/useBackendStore.js";

import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Input,
    Box
} from '@chakra-ui/react'
import {useNavigate} from "react-router-dom";
import {AppRoutes} from "../constants/constants.js";

interface IFormInput {
    domain: string;
    token: string;
}


export const LoginPage: React.FC = () => {
    const { register, handleSubmit, formState: { errors }, } = useForm<IFormInput>({
        defaultValues: {
            domain: process.env.GOODDATA_HOST ?? '',
            token: process.env.TIGER_API_TOKEN ?? ''
        },
    })
    const {setBackend} = useBackendStore();
    const navigate = useNavigate()
    const onSubmit: SubmitHandler<IFormInput> = (data) => {
        setBackend(data.domain, data.token)
        navigate(AppRoutes.Home)
    }

    console.log(errors)

    return (
        <Box w="100%" h="100%" backgroundColor="#FFF5F7">
        <form onSubmit={handleSubmit(onSubmit)}>
            <FormControl isInvalid={!!errors.domain}>
                <FormLabel>Domain</FormLabel>
                <Input {...register("domain", { required: true  })} />
                {!errors.domain && (
                    <FormHelperText>
                        Please enter your GoodData domain
                    </FormHelperText>
                )}
                <FormLabel>API Token</FormLabel>
                <Input {...register("token", { required: true  })} />
                {errors.domain?.type === "required" ? (
                    <FormErrorMessage>
                        This is required
                    </FormErrorMessage>
                ) :
                    (<FormErrorMessage>{errors?.domain?.message}</FormErrorMessage>)
                }
                {!errors && (
                    <FormHelperText>
                        Please enter your API Token
                    </FormHelperText>
                )}
                {/* TODO: Validation of the Token */}
            <input type="submit" />
            </FormControl>
        </form>
        </Box>
    )
}
