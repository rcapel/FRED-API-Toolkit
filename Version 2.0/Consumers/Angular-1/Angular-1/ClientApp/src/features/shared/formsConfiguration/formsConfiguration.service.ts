import { Injectable } from '@angular/core';
import { Validators } from '@angular/forms';

export interface IFormsConfiguration {
  configuration: Object,
  controlValidation: Object
}

@Injectable()
export class FormsConfigurationService {
  idValidationMessages: string;
  tagNamesValidationMessages: string;
  searchTextValidationMessages: string;

  getId(prefix: string = ""): IFormsConfiguration {
    let fullPrefix = prefix === "" ? prefix : prefix + " ";
    return {
      configuration: {
        id: ["", [Validators.required]]
      },
      controlValidation: {
        id: {
          validationMessages: {
            required: `${fullPrefix}Id is required.`,
            pattern: `${fullPrefix}Id must be numeric.`
          },
          messageCallback: (messages: string) => this.idValidationMessages = messages
        }
      }
    }
  };

  dateRange: IFormsConfiguration = {
    configuration: {
      startDate: "",
      endDate: ""
    },
    controlValidation: {
    }
  };

  getList(orderBy: string = "", sortOrder: string = "asc"): IFormsConfiguration {
    return {
      configuration: {
        limit: "",
        offset: "",
        orderBy: orderBy,
        sortOrder: sortOrder
      },
      controlValidation: {
      }
    }
  }

  filters: IFormsConfiguration = {
    configuration: {
      filterVariable: "",
      filterValue: ""
    },
    controlValidation: {
    }
  };

  tagNames: IFormsConfiguration = {
    configuration: {
      tagNames: ""
    },
    controlValidation: {
    }
  }

  tagNamesRequired: IFormsConfiguration = {
    configuration: {
      tagNames: ["", [Validators.required]]
    },
    controlValidation: {
      tagNames: {
        validationMessages: {
          required: "Tag Name(s) is required."
        },
        messageCallback: (messages: string) => this.tagNamesValidationMessages = messages
      }
    }
  }

  excludeTagNames: IFormsConfiguration = {
    configuration: {
      excludeTagNames: ""
    },
    controlValidation: {
    }
  }

  tagGroupId: IFormsConfiguration = {
    configuration: {
      tagGroupId: ""
    },
    controlValidation: {
    }
  }

  tagSearchText: IFormsConfiguration = {
    configuration: {
      tagSearchText: ""
    },
    controlValidation: {
    }
  }

  searchText: IFormsConfiguration = {
    configuration: {
      searchText: ""
    },
    controlValidation: {
    }
  }

  searchTextRequired: IFormsConfiguration = {
    configuration: {
      searchText: ["", [Validators.required]]
    },
    controlValidation: {
      tagNames: {
        validationMessages: {
          required: "Search text is required."
        },
        messageCallback: (messages: string) => this.searchTextValidationMessages = messages
      }
    }
  }

  includeReleaseDatesWithNoData: IFormsConfiguration = {
    configuration: {
      includeReleaseDatesWithNoData: "false"
    },
    controlValidation: {
    }
  }

}
