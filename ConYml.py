import yaml


def convert_txt_to_yaml(file_content):
    """Converts a text file to a YAML file"""
    config_dict = {}

    # Split the lines
    lines = file_content.splitlines()
    section_title = None
    for line in lines:
        if line == '\n':
            continue
        elif re.match('.*end$', line):
            # End of section
            section_title = None
        elif re.match('.*Section\s+.*', line):
            # Start of Section
            match_obj = re.match(".*Section\s+(.*)", line)
            section_title = match_obj.groups()[0]
            config_dict[section_title] = {}
        elif section_title and re.match(".*{}_.*\s+=.*".format(section_title), line):
            match_obj = re.match(
                ".*{}_(.*)\s+=(.*)".format(section_title), line)
            config_dict[section_title][match_obj.groups()[0]] = match_obj.groups()[
                1]
    return yaml.dump(config_dict)
