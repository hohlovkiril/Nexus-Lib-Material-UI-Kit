import { AutocompleteSlotsAndSlotProps, ChipTypeMap, InternalStandardProps, UseAutocompleteProps } from '@mui/material'

export interface AutocompleteProps<
  Value,
  Multiple extends boolean | undefined,
  DisableClearable extends boolean | undefined,
  FreeSolo extends boolean | undefined,
  ChipComponent extends React.ElementType = ChipTypeMap['defaultComponent'],
> extends UseAutocompleteProps<Value, Multiple, DisableClearable, FreeSolo>,
    InternalStandardProps<React.HTMLAttributes<HTMLDivElement>, 'defaultValue' | 'onChange' | 'children'>,
    AutocompleteSlotsAndSlotProps<Value, Multiple, DisableClearable, FreeSolo, ChipComponent>  {}