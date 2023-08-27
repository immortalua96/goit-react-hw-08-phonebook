import { Group, Avatar, Text, Menu, UnstyledButton } from '@mantine/core';
import { IconChevronDown, IconLogout } from '@tabler/icons-react';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks';

const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <Menu
      shadow="md"
      width={200}
      trigger="hover"
      openDelay={100}
      closeDelay={400}
      position="bottom-end"
      withArrow
      arrowPosition="center"
      transitionProps={{
        transition: 'rotate-right',
        duration: 150,
      }}
    >
      <Menu.Target>
        <UnstyledButton
          sx={theme => ({
            display: 'block',
            width: '100%',
            padding: theme.spacing.md,
            color:
              theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,

            '&:hover': {
              backgroundColor:
                theme.colorScheme === 'dark'
                  ? theme.colors.dark[8]
                  : theme.colors.gray[0],
            },
          })}
        >
          <Group>
            <Avatar
              radius="xl"
              size="md"
              src="https://e7.pngegg.com/pngimages/153/296/png-clipart-bungo-stray-dogs-anime-noragami-anime-mammal-black-hair.png"
            />

            <div style={{ flex: 1 }}>
              <Text size="sm" weight={500}>
                {user.name}
              </Text>

              <Text color="dimmed" size="xs">
                {user.email}
              </Text>
            </div>

            <IconChevronDown size="1rem" />
          </Group>
        </UnstyledButton>
      </Menu.Target>

      <Menu.Dropdown>
        <Menu.Label>Danger zone</Menu.Label>
        <Menu.Item
          onClick={() => dispatch(logOut())}
          icon={<IconLogout size={14} />}
        >
          Logout
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
};

export default UserMenu;
