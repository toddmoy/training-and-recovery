require 'date'

def elapsed_days(from, to)
  date_from = Date.parse(from)
  date_to = Date.parse(to)

  return (date_to - date_from).to_i
end
