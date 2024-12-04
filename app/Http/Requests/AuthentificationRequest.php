<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class AuthentificationRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get error messages
     *
     * @return array<string, string>
     */
    public function messages(): array
    {
        return [
            'email.email' => 'l\'Email n\'est pas valide',
            'email.required' => 'L\'Email est requis',
            'password.required' => 'Le mot de passe est requis',
            'password.min' => 'Le mot de passe doit contenir au moins 8 caractères',
        ];
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'email' => 'required|email',
            'password' => 'required|min:8',
        ];
    }
}
