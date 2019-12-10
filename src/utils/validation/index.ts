import validate from "validate.js";

export const loginValidation = (values: any) => {
  const constraints = {
    email: {
      presence: true,
      email: true,
    },
    password: {
      presence: true,
      length: {
        minimum: 8,
      },
    },
  };

  return validate(values, constraints);
};

export const registrationValidation = (values: any) => {
  const constraints = {
    name: {
      presence: true,
      length: {
        minimum: 2,
      },
    },
    surname: {
      presence: true,
      length: {
        minimum: 2,
      },
    },
    email: {
      presence: true,
      email: true,
    },
    password: {
      presence: true,
      length: {
        minimum: 8,
      },
    },
    repeat_password: {
      equality: "password"
    }
  };
  return validate(values, constraints);
};

export const addItemValidation = (values: any) => {
  const constraints = {
    name: {
      presence: true,
      length: {
        minimum: 2,
        maximum: 300
      },
    },
    price: {
      presence: true
    },
    description: {
      presence: true,
      length: {
        minimum: 8,
        maximum: 300
      },
    },
    image: {
      presence: {
        allowEmpty: false,
        message: 'is required'
      },
    },
    forAuction: {
      presence: true
    }
  };

  return validate(values, constraints);
};

export const updateItemValidation = (values: any) => {
  const constraints = {
    name: {
      presence: true,
      length: {
        minimum: 2,
        maximum: 300
      },
    },
    price: {
      presence: true
    },
    description: {
      presence: true,
      length: {
        minimum: 8,
        maximum: 300
      },
    },
    forAuction: {
      presence: true
    }
  };

  return validate(values, constraints);
};
