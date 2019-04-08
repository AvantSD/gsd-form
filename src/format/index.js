import VMasker from 'vanilla-masker'

const numeric = value => value.replace(/\D/g, '')

const phone = value =>
  value && VMasker.toNumber(value)
    ? VMasker.toPattern(value,
      (value.length >= 15 ? '(99) 99999.9999' : '(99) 9999.9999'))
    : numeric(value)

const date = value =>
  value && VMasker.toNumber(value)
    ? VMasker.toPattern(value, '99/99/9999')
    : numeric(value)

const formats = {
  numeric,
  phone,
  date,
}

export default formats
