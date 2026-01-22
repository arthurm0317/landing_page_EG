'use client'
import { useState } from 'react';
import './index.css';

function App() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [customerId, setCustomerId] = useState(null);
  const [fieldErrors, setFieldErrors] = useState({});
  const [errorSection, setErrorSection] = useState(null);

  const [formData, setFormData] = useState({
    reference_id: '',
    name: '',
    email: '',
    tax_id: '',
    phones: [{ country: '55', area: '', number: '' }],
    birth_date: '',
    address: {
      street: '',
      number: '',
      complement: '',
      locality: '',
      city: '',
      region_code: '',
      postal_code: '',
      country: 'BRA',
    },
    billing_info: [
      {
        type: 'CREDIT_CARD',
        card: {
          number: '',
          exp_year: '',
          exp_month: '',
          security_code: '',
          holder: {
            name: '',
            birth_date: '',
            tax_id: '',
            phone: { country: '55', area: '', number: '' },
          },
        },
      },
    ],
  });

  const mapParameterToField = (parameterName) => {
    if (!parameterName) return null;
    
    const mapping = {
      'customer.tax_id': 'tax_id',
      'customer.name': 'name',
      'customer.email': 'email',
      'customer.birth_date': 'birth_date',
      'customer.phones[0].country': 'phone_country',
      'customer.phones[0].area': 'phone_area',
      'customer.phones[0].number': 'phone_number',
      'customer.address.street': 'address.street',
      'customer.address.number': 'address.number',
      'customer.address.complement': 'address.complement',
      'customer.address.locality': 'address.locality',
      'customer.address.city': 'address.city',
      'customer.address.region_code': 'address.region_code',
      'customer.address.postal_code': 'address.postal_code',
      'customer.address.country': 'address.country',
      'customer.billing_info[0].card.number': 'card_number',
      'customer.billing_info[0].card.exp_month': 'card_exp_month',
      'customer.billing_info[0].card.exp_year': 'card_exp_year',
      'customer.billing_info[0].card.security_code': 'card_security_code',
      'customer.billing_info[0].card.holder.name': 'holder_name',
      'customer.billing_info[0].card.holder.birth_date': 'holder_birth_date',
      'customer.billing_info[0].card.holder.tax_id': 'holder_tax_id',
      'tax_id': 'tax_id',
      'name': 'name',
      'email': 'email',
      'birth_date': 'birth_date',
      'phones[0].country': 'phone_country',
      'phones[0].area': 'phone_area',
      'phones[0].number': 'phone_number',
      'address.street': 'address.street',
      'address.number': 'address.number',
      'address.complement': 'address.complement',
      'address.locality': 'address.locality',
      'address.city': 'address.city',
      'address.region_code': 'address.region_code',
      'address.postal_code': 'address.postal_code',
      'address.country': 'address.country',
      'billing_info[0].card.number': 'card_number',
      'billing_info[0].card.exp_month': 'card_exp_month',
      'billing_info[0].card.exp_year': 'card_exp_year',
      'billing_info[0].card.security_code': 'card_security_code',
      'billing_info[0].card.holder.name': 'holder_name',
      'billing_info[0].card.holder.birth_date': 'holder_birth_date',
      'billing_info[0].card.holder.tax_id': 'holder_tax_id',
    };
    
    if (mapping[parameterName]) {
      return mapping[parameterName];
    }
    
    const parts = parameterName.split('.');
    const lastPart = parts[parts.length - 1].replace(/\[\d+\]/g, '');
    
    if (parameterName.includes('tax_id')) {
      return parameterName.includes('holder') ? 'holder_tax_id' : 'tax_id';
    }
    if (parameterName.includes('card.number') || parameterName.includes('card_number')) {
      return 'card_number';
    }
    if (parameterName.includes('card.exp_month') || parameterName.includes('exp_month')) {
      return 'card_exp_month';
    }
    if (parameterName.includes('card.exp_year') || parameterName.includes('exp_year')) {
      return 'card_exp_year';
    }
    if (parameterName.includes('security_code')) {
      return 'card_security_code';
    }
    if (parameterName.includes('holder.name')) {
      return 'holder_name';
    }
    if (parameterName.includes('holder.birth_date')) {
      return 'holder_birth_date';
    }
    
    return parameterName
      .replace(/^(customer|subscription|payment_method)\./, '')
      .replace(/\[\d+\]/g, '')
      .replace(/\./g, '_');
  };

  const getSectionFromField = (fieldName) => {
    if (!fieldName) return null;
    
    if (['name', 'email', 'tax_id', 'birth_date', 'phone_country', 'phone_area', 'phone_number'].includes(fieldName)) {
      return 'Dados Pessoais';
    }
    if (fieldName.startsWith('address')) {
      return 'Endereço';
    }
    if (['card_number', 'card_exp_month', 'card_exp_year', 'card_security_code', 'holder_name', 'holder_birth_date', 'holder_tax_id'].includes(fieldName)) {
      return 'Dados do Cartão';
    }
    return null;
  };

  const translateError = (description) => {
    if (!description) return 'Campo inválido';
    
    const fullTranslations = {
      'The tax id is incorrect. It cannot be blank and must be a valid tax identification.': 'O CPF/CNPJ está incorreto. Não pode estar em branco e deve ser uma identificação fiscal válida.',
      'The email is incorrect. It cannot be blank and must be a valid email.': 'O email está incorreto. Não pode estar em branco e deve ser um email válido.',
      'The phone number is incorrect.': 'O número de telefone está incorreto.',
      'The card number is incorrect.': 'O número do cartão está incorreto.',
      'The security code is incorrect.': 'O código de segurança está incorreto.',
      'The expiration date is incorrect.': 'A data de expiração está incorreta.',
      'The postal code is incorrect.': 'O CEP está incorreto.',
      'The birth date is incorrect.': 'A data de nascimento está incorreta.',
    };
    
    for (const [key, value] of Object.entries(fullTranslations)) {
      if (description.toLowerCase().includes(key.toLowerCase())) {
        return value;
      }
    }
    
    const patternTranslations = [
      { pattern: /cannot be blank/gi, replacement: 'não pode estar em branco' },
      { pattern: /must be a valid/gi, replacement: 'deve ser um' },
      { pattern: /is incorrect/gi, replacement: 'está incorreto' },
      { pattern: /is required/gi, replacement: 'é obrigatório' },
      { pattern: /is invalid/gi, replacement: 'é inválido' },
      { pattern: /is missing/gi, replacement: 'está faltando' },
    ];
    
    let translated = description;
    patternTranslations.forEach(({ pattern, replacement }) => {
      translated = translated.replace(pattern, replacement);
    });
    
    return translated;
  };

  const processApiErrors = (errorData) => {
    const errors = {};
    const sections = new Set();

    if (errorData?.error_messages && Array.isArray(errorData.error_messages)) {
      errorData.error_messages.forEach((errorMsg) => {
        const parameterName = errorMsg.parameter_name || errorMsg.field || errorMsg.param || errorMsg.path;
        const fieldName = mapParameterToField(parameterName);
        let description = errorMsg.description || errorMsg.message || errorMsg.error || 'Campo inválido';
        description = translateError(description);
        
        const finalFieldName = fieldName || parameterName || 'campo_desconhecido';
        errors[finalFieldName] = description;
        
        const section = getSectionFromField(finalFieldName);
        if (section) {
          sections.add(section);
        }
      });
    }

    if (errorData?.errors && typeof errorData.errors === 'object') {
      Object.entries(errorData.errors).forEach(([key, value]) => {
        const fieldName = mapParameterToField(key) || key;
        let description = Array.isArray(value) ? value.join(', ') : String(value);
        description = translateError(description);
        errors[fieldName] = description;
        
        const section = getSectionFromField(fieldName);
        if (section) {
          sections.add(section);
        }
      });
    }

    return { errors, sections: Array.from(sections) };
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    if (fieldErrors[name]) {
      setFieldErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
    
    if (name.includes('.')) {
      const [parent, child, grandchild] = name.split('.');
      setFormData((prev) => ({
        ...prev,
        [parent]: {
          ...prev[parent],
          [child]: grandchild
            ? { ...prev[parent][child], [grandchild]: value }
            : value,
        },
      }));
    } else if (name.startsWith('phone_')) {
      const field = name.replace('phone_', '');
      setFormData((prev) => ({
        ...prev,
        phones: [{ ...prev.phones[0], [field]: value }],
      }));
    } else if (name.startsWith('card_')) {
      const field = name.replace('card_', '');
      setFormData((prev) => ({
        ...prev,
        billing_info: [
          {
            ...prev.billing_info[0],
            card: {
              ...prev.billing_info[0].card,
              [field]: value,
            },
          },
        ],
      }));
    } else if (name.startsWith('holder_')) {
      const field = name.replace('holder_', '');
      setFormData((prev) => ({
        ...prev,
        billing_info: [
          {
            ...prev.billing_info[0],
            card: {
              ...prev.billing_info[0].card,
              holder: {
                ...prev.billing_info[0].card.holder,
                [field]: value,
              },
            },
          },
        ],
      }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleCriarAssinante = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);
    setFieldErrors({});
    setErrorSection(null);

    // Preparar payload no formato correto para a API
    const payload = {
      reference_id: formData.reference_id || `CUSTOMER_${Date.now()}`,
      name: formData.name,
      email: formData.email,
      tax_id: formData.tax_id,
      birth_date: formData.birth_date,
      phones: formData.phones.filter(phone => phone.country && phone.area && phone.number),
      address: {
        street: formData.address.street,
        number: formData.address.number,
        locality: formData.address.locality,
        city: formData.address.city,
        region_code: formData.address.region_code,
        postal_code: formData.address.postal_code,
        country: formData.address.country,
      },
      billing_info: [
        {
          type: 'CREDIT_CARD',
          card: {
            number: formData.billing_info[0].card.number,
            exp_year: formData.billing_info[0].card.exp_year,
            exp_month: formData.billing_info[0].card.exp_month,
            security_code: formData.billing_info[0].card.security_code,
            holder: {
              name: formData.billing_info[0].card.holder.name,
              birth_date: formData.billing_info[0].card.holder.birth_date,
              tax_id: formData.billing_info[0].card.holder.tax_id,
              phone: formData.billing_info[0].card.holder.phone,
            },
          },
        },
      ],
    };

    // Adicionar complemento apenas se não estiver vazio
    if (formData.address.complement && formData.address.complement.trim()) {
      payload.address.complement = formData.address.complement;
    }

    try {
      const response = await fetch('/api/pagbank/customers', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      let data;
      try {
        data = await response.json();
      } catch (parseError) {
        const text = await response.text();
        setError(`Erro ao processar resposta: ${text || 'Resposta inválida'}`);
        setLoading(false);
        return;
      }

      if (!response.ok) {
        const errorData = data.error || data;
        
        if (response.status === 500) {
          const errorMsg = errorData?.message || errorData?.error?.message || 'Erro interno do servidor. Verifique os dados e tente novamente.';
          setError(`Erro: ${errorMsg}`);
          if (errorData?.error?.details && process.env.NODE_ENV === 'development') {
            console.error('Detalhes do erro:', errorData.error.details);
          }
        } else if (response.status === 403) {
          setError('Erro: A conta sandbox precisa de aprovação. Entre em contato com o suporte do PagSeguro.');
        } else if (response.status === 401) {
          setError('Erro: Token de autenticação inválido ou expirado.');
        } else if (errorData?.error_messages && Array.isArray(errorData.error_messages)) {
          const { errors, sections } = processApiErrors(errorData);
          setFieldErrors(errors);
          if (sections.length > 0) {
            setErrorSection(`Verifique os campos em: ${sections.join(', ')}`);
            setError(`Erro ao processar os dados. ${sections.join(', ')}`);
          } else {
            setError('Erro ao processar os dados. Verifique os campos preenchidos.');
          }
        } else if (errorData?.message) {
          setError(errorData.message);
        } else if (errorData?.error_description) {
          setError(errorData.error_description);
        } else if (errorData?.error) {
          setError(typeof errorData.error === 'string' ? errorData.error : errorData.error.message || 'Erro desconhecido');
        } else {
          setError('Erro ao criar assinante. Tente novamente.');
        }
      } else {
        setSuccess('Assinante criado com sucesso!');
        setCustomerId(data.id);
        setFieldErrors({});
      }
    } catch (err) {
      console.error('Erro na requisição:', err);
      setError(err.message || 'Erro ao criar assinante. Verifique sua conexão e tente novamente.');
    } finally {
      setLoading(false);
    }
  };

  const handleCriarAssinatura = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);
    setFieldErrors({});
    setErrorSection(null);

    if (!customerId) {
      setError('Erro: Primeiro é necessário criar o assinante.');
      setLoading(false);
      return;
    }

    const subscriptionPayload = {
      plan: {
        id: 'PLAN_632C4594-1361-4E36-B367-D6863FDDE193'
      },
      customer: {
        billing_info: [
          {
            card: {
              holder: {
                phone: formData.billing_info[0].card.holder.phone,
                name: formData.billing_info[0].card.holder.name,
                birth_date: formData.billing_info[0].card.holder.birth_date,
                tax_id: formData.billing_info[0].card.holder.tax_id
              },
              number: formData.billing_info[0].card.number,
              security_code: formData.billing_info[0].card.security_code,
              exp_year: formData.billing_info[0].card.exp_year,
              exp_month: formData.billing_info[0].card.exp_month
            },
            type: 'CREDIT_CARD'
          }
        ],
        id: customerId
      },
      payment_method: [
        {
          type: 'CREDIT_CARD',
          card: { security_code: formData.billing_info[0].card.security_code }
        }
      ],
      amount: {
        value: 150099,
        currency: 'BRL'
      },
      best_invoice_date: {
        day: '5'
      },
      reference_id: `subscription-${Date.now()}`,
      pro_rata: false
    };

    try {
      const response = await fetch('/api/pagbank/subscriptions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(subscriptionPayload),
      });

      const data = await response.json();

      if (!response.ok) {
        const errorData = data.error || data;
        
        if (response.status === 403) {
          setError('Erro: A conta sandbox precisa de aprovação. Entre em contato com o suporte do PagSeguro.');
        } else if (response.status === 401) {
          setError('Erro: Token de autenticação inválido ou expirado.');
        } else if (errorData?.error_messages && Array.isArray(errorData.error_messages)) {
          const { errors, sections } = processApiErrors(errorData);
          setFieldErrors(errors);
          if (sections.length > 0) {
            setErrorSection(`Verifique os campos em: ${sections.join(', ')}`);
            setError(`Erro ao processar os dados. ${sections.join(', ')}`);
          } else {
            setError('Erro ao processar os dados. Verifique os campos preenchidos.');
          }
        } else if (errorData?.message) {
          setError(errorData.message);
        } else if (errorData?.error_description) {
          setError(errorData.error_description);
        } else if (errorData?.error) {
          setError(errorData.error);
        } else {
          setError('Erro ao criar assinatura. Tente novamente.');
        }
      } else {
        setSuccess('Assinatura criada com sucesso!');
        setFieldErrors({});
      }
    } catch (err) {
      setError(err.message || 'Erro ao criar assinatura. Tente novamente.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <h1>Finalizar Assinatura</h1>
      
      {error && error.includes('403') && (
        <div className="error" style={{ marginBottom: '20px' }}>
          <strong>Atenção:</strong> Se você está recebendo erro 403, sua conta sandbox pode precisar de aprovação do PagSeguro para usar a API de Assinaturas. 
          Entre em contato com o suporte através do <a href="https://developer.pagbank.com.br" target="_blank" rel="noopener noreferrer">portal do desenvolvedor</a>.
        </div>
      )}

      {errorSection && (
        <div className="error" style={{ marginBottom: '20px' }}>
          <strong>{errorSection}</strong>
        </div>
      )}

      <form onSubmit={handleCriarAssinante}>
        <div className="section">
          <div className="section-title">Dados Pessoais</div>
          
          <div className="row">
            <div className="form-group">
              <label>Nome Completo</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Digite seu nome completo"
                className={fieldErrors.name ? 'error-input' : ''}
                required
              />
              {fieldErrors.name && (
                <span className="field-error">{fieldErrors.name}</span>
              )}
            </div>

            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="seu@email.com"
                className={fieldErrors.email ? 'error-input' : ''}
                required
              />
              {fieldErrors.email && (
                <span className="field-error">{fieldErrors.email}</span>
              )}
            </div>
          </div>

          <div className="row">
            <div className="form-group">
              <label>CPF/CNPJ</label>
              <input
                type="text"
                name="tax_id"
                value={formData.tax_id}
                onChange={handleChange}
                placeholder="000.000.000-00"
                className={fieldErrors.tax_id ? 'error-input' : ''}
                required
              />
              {fieldErrors.tax_id && (
                <span className="field-error">{fieldErrors.tax_id}</span>
              )}
            </div>

            <div className="form-group">
              <label>Data de Nascimento</label>
              <input
                type="date"
                name="birth_date"
                value={formData.birth_date}
                onChange={handleChange}
                className={fieldErrors.birth_date ? 'error-input' : ''}
                required
              />
              {fieldErrors.birth_date && (
                <span className="field-error">{fieldErrors.birth_date}</span>
              )}
            </div>
          </div>

          <div className="section-title" style={{ marginTop: '20px' }}>Telefone</div>
          <div className="row">
            <div className="form-group">
              <label>País</label>
              <input
                type="text"
                name="phone_country"
                value={formData.phones[0].country}
                onChange={(e) => {
                  setFormData((prev) => ({
                    ...prev,
                    phones: [{ ...prev.phones[0], country: e.target.value }],
                  }));
                  if (fieldErrors.phone_country) {
                    setFieldErrors((prev) => {
                      const newErrors = { ...prev };
                      delete newErrors.phone_country;
                      return newErrors;
                    });
                  }
                }}
                placeholder="55"
                className={fieldErrors.phone_country ? 'error-input' : ''}
                required
              />
              {fieldErrors.phone_country && (
                <span className="field-error">{fieldErrors.phone_country}</span>
              )}
            </div>

            <div className="form-group">
              <label>DDD</label>
              <input
                type="text"
                name="phone_area"
                value={formData.phones[0].area}
                onChange={(e) => {
                  setFormData((prev) => ({
                    ...prev,
                    phones: [{ ...prev.phones[0], area: e.target.value }],
                  }));
                  if (fieldErrors.phone_area) {
                    setFieldErrors((prev) => {
                      const newErrors = { ...prev };
                      delete newErrors.phone_area;
                      return newErrors;
                    });
                  }
                }}
                placeholder="11"
                className={fieldErrors.phone_area ? 'error-input' : ''}
                required
              />
              {fieldErrors.phone_area && (
                <span className="field-error">{fieldErrors.phone_area}</span>
              )}
            </div>

            <div className="form-group">
              <label>Número</label>
              <input
                type="text"
                name="phone_number"
                value={formData.phones[0].number}
                onChange={(e) => {
                  setFormData((prev) => ({
                    ...prev,
                    phones: [{ ...prev.phones[0], number: e.target.value }],
                  }));
                  if (fieldErrors.phone_number) {
                    setFieldErrors((prev) => {
                      const newErrors = { ...prev };
                      delete newErrors.phone_number;
                      return newErrors;
                    });
                  }
                }}
                placeholder="987654321"
                className={fieldErrors.phone_number ? 'error-input' : ''}
                required
              />
              {fieldErrors.phone_number && (
                <span className="field-error">{fieldErrors.phone_number}</span>
              )}
            </div>
          </div>
        </div>

        <div className="section">
          <div className="section-title">Endereço</div>
          
          <div className="form-group">
            <label>Rua</label>
            <input
              type="text"
              name="address.street"
              value={formData.address.street}
              onChange={handleChange}
              placeholder="Nome da rua"
              className={fieldErrors['address.street'] ? 'error-input' : ''}
              required
            />
            {fieldErrors['address.street'] && (
              <span className="field-error">{fieldErrors['address.street']}</span>
            )}
          </div>

          <div className="row">
            <div className="form-group">
              <label>Número</label>
              <input
                type="text"
                name="address.number"
                value={formData.address.number}
                onChange={handleChange}
                placeholder="123"
                className={fieldErrors['address.number'] ? 'error-input' : ''}
                required
              />
              {fieldErrors['address.number'] && (
                <span className="field-error">{fieldErrors['address.number']}</span>
              )}
            </div>

            <div className="form-group">
              <label>Complemento</label>
              <input
                type="text"
                name="address.complement"
                value={formData.address.complement}
                onChange={handleChange}
                placeholder="Apto, Bloco, etc (opcional)"
                className={fieldErrors['address.complement'] ? 'error-input' : ''}
              />
              {fieldErrors['address.complement'] && (
                <span className="field-error">{fieldErrors['address.complement']}</span>
              )}
            </div>
          </div>

          <div className="form-group">
            <label>Bairro</label>
            <input
              type="text"
              name="address.locality"
              value={formData.address.locality}
              onChange={handleChange}
              placeholder="Nome do bairro"
              className={fieldErrors['address.locality'] ? 'error-input' : ''}
              required
            />
            {fieldErrors['address.locality'] && (
              <span className="field-error">{fieldErrors['address.locality']}</span>
            )}
          </div>

          <div className="row">
            <div className="form-group">
              <label>Cidade</label>
              <input
                type="text"
                name="address.city"
                value={formData.address.city}
                onChange={handleChange}
                placeholder="Nome da cidade"
                className={fieldErrors['address.city'] ? 'error-input' : ''}
                required
              />
              {fieldErrors['address.city'] && (
                <span className="field-error">{fieldErrors['address.city']}</span>
              )}
            </div>

            <div className="form-group">
              <label>Estado (UF)</label>
              <input
                type="text"
                name="address.region_code"
                value={formData.address.region_code}
                onChange={handleChange}
                placeholder="SP"
                className={fieldErrors['address.region_code'] ? 'error-input' : ''}
                required
              />
              {fieldErrors['address.region_code'] && (
                <span className="field-error">{fieldErrors['address.region_code']}</span>
              )}
            </div>
          </div>

          <div className="row">
            <div className="form-group">
              <label>CEP</label>
              <input
                type="text"
                name="address.postal_code"
                value={formData.address.postal_code}
                onChange={handleChange}
                placeholder="00000-000"
                className={fieldErrors['address.postal_code'] ? 'error-input' : ''}
                required
              />
              {fieldErrors['address.postal_code'] && (
                <span className="field-error">{fieldErrors['address.postal_code']}</span>
              )}
            </div>

            <div className="form-group">
              <label>País</label>
              <input
                type="text"
                name="address.country"
                value={formData.address.country}
                onChange={handleChange}
                placeholder="BRA"
                className={fieldErrors['address.country'] ? 'error-input' : ''}
                required
              />
              {fieldErrors['address.country'] && (
                <span className="field-error">{fieldErrors['address.country']}</span>
              )}
            </div>
          </div>
        </div>

        <div className="section">
          <div className="section-title">Dados do Cartão</div>
          
          <div className="form-group">
            <label>Número do Cartão</label>
            <input
              type="text"
              name="card_number"
              value={formData.billing_info[0].card.number}
              onChange={(e) => {
                setFormData((prev) => ({
                  ...prev,
                  billing_info: [
                    {
                      ...prev.billing_info[0],
                      card: { ...prev.billing_info[0].card, number: e.target.value },
                    },
                  ],
                }));
                if (fieldErrors.card_number) {
                  setFieldErrors((prev) => {
                    const newErrors = { ...prev };
                    delete newErrors.card_number;
                    return newErrors;
                  });
                }
              }}
              placeholder="0000 0000 0000 0000"
              className={fieldErrors.card_number ? 'error-input' : ''}
              required
            />
            {fieldErrors.card_number && (
              <span className="field-error">{fieldErrors.card_number}</span>
            )}
          </div>

          <div className="row">
            <div className="form-group">
              <label>Mês de Expiração</label>
              <input
                type="text"
                name="card_exp_month"
                value={formData.billing_info[0].card.exp_month}
                onChange={(e) => {
                  setFormData((prev) => ({
                    ...prev,
                    billing_info: [
                      {
                        ...prev.billing_info[0],
                        card: { ...prev.billing_info[0].card, exp_month: e.target.value },
                      },
                    ],
                  }));
                  if (fieldErrors.card_exp_month) {
                    setFieldErrors((prev) => {
                      const newErrors = { ...prev };
                      delete newErrors.card_exp_month;
                      return newErrors;
                    });
                  }
                }}
                placeholder="12"
                className={fieldErrors.card_exp_month ? 'error-input' : ''}
                required
              />
              {fieldErrors.card_exp_month && (
                <span className="field-error">{fieldErrors.card_exp_month}</span>
              )}
            </div>

            <div className="form-group">
              <label>Ano de Expiração</label>
              <input
                type="text"
                name="card_exp_year"
                value={formData.billing_info[0].card.exp_year}
                onChange={(e) => {
                  setFormData((prev) => ({
                    ...prev,
                    billing_info: [
                      {
                        ...prev.billing_info[0],
                        card: { ...prev.billing_info[0].card, exp_year: e.target.value },
                      },
                    ],
                  }));
                  if (fieldErrors.card_exp_year) {
                    setFieldErrors((prev) => {
                      const newErrors = { ...prev };
                      delete newErrors.card_exp_year;
                      return newErrors;
                    });
                  }
                }}
                placeholder="26"
                className={fieldErrors.card_exp_year ? 'error-input' : ''}
                required
              />
              {fieldErrors.card_exp_year && (
                <span className="field-error">{fieldErrors.card_exp_year}</span>
              )}
            </div>

            <div className="form-group">
              <label>Código de Segurança</label>
              <input
                type="number"
                name="card_security_code"
                value={formData.billing_info[0].card.security_code}
                onChange={(e) => {
                  setFormData((prev) => ({
                    ...prev,
                    billing_info: [
                      {
                        ...prev.billing_info[0],
                        card: { ...prev.billing_info[0].card, security_code: parseInt(e.target.value) || '' },
                      },
                    ],
                  }));
                  if (fieldErrors.card_security_code) {
                    setFieldErrors((prev) => {
                      const newErrors = { ...prev };
                      delete newErrors.card_security_code;
                      return newErrors;
                    });
                  }
                }}
                placeholder="123"
                className={fieldErrors.card_security_code ? 'error-input' : ''}
                required
              />
              {fieldErrors.card_security_code && (
                <span className="field-error">{fieldErrors.card_security_code}</span>
              )}
            </div>
          </div>

          <div className="section-title" style={{ marginTop: '20px' }}>Dados do Portador</div>
          
          <div className="form-group">
            <label>Nome do Portador</label>
            <input
              type="text"
              name="holder_name"
              value={formData.billing_info[0].card.holder.name}
              onChange={(e) => {
                setFormData((prev) => ({
                  ...prev,
                  billing_info: [
                    {
                      ...prev.billing_info[0],
                      card: {
                        ...prev.billing_info[0].card,
                        holder: { ...prev.billing_info[0].card.holder, name: e.target.value },
                      },
                    },
                  ],
                }));
                if (fieldErrors.holder_name) {
                  setFieldErrors((prev) => {
                    const newErrors = { ...prev };
                    delete newErrors.holder_name;
                    return newErrors;
                  });
                }
              }}
              placeholder="Nome como está no cartão"
              className={fieldErrors.holder_name ? 'error-input' : ''}
              required
            />
            {fieldErrors.holder_name && (
              <span className="field-error">{fieldErrors.holder_name}</span>
            )}
          </div>

          <div className="row">
            <div className="form-group">
              <label>Data de Nascimento do Portador</label>
              <input
                type="date"
                name="holder_birth_date"
                value={formData.billing_info[0].card.holder.birth_date}
                onChange={(e) => {
                  setFormData((prev) => ({
                    ...prev,
                    billing_info: [
                      {
                        ...prev.billing_info[0],
                        card: {
                          ...prev.billing_info[0].card,
                          holder: { ...prev.billing_info[0].card.holder, birth_date: e.target.value },
                        },
                      },
                    ],
                  }));
                  if (fieldErrors.holder_birth_date) {
                    setFieldErrors((prev) => {
                      const newErrors = { ...prev };
                      delete newErrors.holder_birth_date;
                      return newErrors;
                    });
                  }
                }}
                className={fieldErrors.holder_birth_date ? 'error-input' : ''}
                required
              />
              {fieldErrors.holder_birth_date && (
                <span className="field-error">{fieldErrors.holder_birth_date}</span>
              )}
            </div>

            <div className="form-group">
              <label>CPF/CNPJ do Portador</label>
              <input
                type="text"
                name="holder_tax_id"
                value={formData.billing_info[0].card.holder.tax_id}
                onChange={(e) => {
                  setFormData((prev) => ({
                    ...prev,
                    billing_info: [
                      {
                        ...prev.billing_info[0],
                        card: {
                          ...prev.billing_info[0].card,
                          holder: { ...prev.billing_info[0].card.holder, tax_id: e.target.value },
                        },
                      },
                    ],
                  }));
                  if (fieldErrors.holder_tax_id) {
                    setFieldErrors((prev) => {
                      const newErrors = { ...prev };
                      delete newErrors.holder_tax_id;
                      return newErrors;
                    });
                  }
                }}
                placeholder="000.000.000-00"
                className={fieldErrors.holder_tax_id ? 'error-input' : ''}
                required
              />
              {fieldErrors.holder_tax_id && (
                <span className="field-error">{fieldErrors.holder_tax_id}</span>
              )}
            </div>
          </div>
        </div>

        {error && !errorSection && <div className="error">{error}</div>}
        {success && <div className="success">{success}</div>}

        <button type="submit" disabled={loading}>
          {loading ? 'Processando...' : 'Continuar'}
        </button>
      </form>

      {customerId && (
        <form onSubmit={handleCriarAssinatura} style={{ marginTop: '30px' }}>
          <div className="section">
            <div className="section-title">Finalizar Assinatura</div>
            <p style={{ fontSize: '14px', color: '#666', marginTop: '10px' }}>
              Clique no botão abaixo para finalizar sua assinatura.
            </p>
          </div>

          {error && !errorSection && <div className="error">{error}</div>}
          {success && <div className="success">{success}</div>}

          <button type="submit" disabled={loading}>
            {loading ? 'Processando...' : 'Finalizar Assinatura'}
          </button>
        </form>
      )}
    </div>
  );
}

export default App;
