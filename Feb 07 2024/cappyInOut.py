def is_sequence_true(events):
    participants_status = {} 

    for participant, action in events:
        if participant not in participants_status:
            participants_status[participant] = 'out'

        current_status = participants_status[participant]

        if (current_status == 'out' and action == 'out') or (current_status == 'in' and action == 'in'):
            return False
        else:
            participants_status[participant] = 'in' if action == 'in' else 'out'

    return True

actions_1 = [('spot', 'in'), ('spot', 'out'), ('spot', 'in'), ('spot', 'out')]
result_1 = is_sequence_true(actions_1)
print(result_1)

